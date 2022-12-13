import { useState } from "react";
import instance from "../service/request";

import Button from "../components/Button";

const useAuth = (props) => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  let formIsValid = false;

  const emailIsValid = inputValue.email.includes("@");
  const passwordIsValid = inputValue.password.length >= 8;

  let emailError = touched.email && !emailIsValid;
  let passwordError = touched.password && !passwordIsValid;

  // eslint-disable-next-line no-unused-vars
  if (emailIsValid && passwordIsValid) formIsValid = true;

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const inputValueBlurHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      alert("Please check your email and password.");
      return;
    }

    const items = {
      email: inputValue.email,
      password: inputValue.password,
    };

    try {
      const res = await instance.post(`${props.url}`, items, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (props.path === "signup") {
        setInputValue({
          email: "",
          password: "",
        });
        alert("Sign Up");
        window.location.replace("/signin");
      }
      if (props.path === "signin") {
        setInputValue({
          email: "",
          password: "",
        });
        window.localStorage.setItem("JWT", res.data.access_token);
        alert("Welcome to Todo List :)");
        window.location.replace("/todos");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-center m-5">{props.title}</h2>
      <form className="flex flex-col items-center p-5 mb-10 border-2 rounded-md w-80">
        <section className="flex flex-col items-center text-center mb-10">
          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter Your Email"
            value={inputValue.email}
            onChange={inputValueChangeHandler}
            onBlur={inputValueBlurHandler}
            className="text-center p-1 border-2 rounded-md "
          />
          {emailError && (
            <p className="text-purple-300 mt-2">
              Please include '@' in your email.
            </p>
          )}
        </section>
        <section className="flex flex-col items-center text-center mb-10">
          <label htmlFor="password" className="text-lg mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={inputValue.password}
            onChange={inputValueChangeHandler}
            onBlur={inputValueBlurHandler}
            className="text-center p-1 border-2 rounded-md"
          />
          {passwordError && (
            <p className="text-purple-300 mt-2">
              Please write at least 8 characters in your password.
            </p>
          )}
        </section>
        <Button
          str={props.title}
          onClick={submitHandler}
          className="w-48 mb-5"
        />
      </form>
    </div>
  );
};

export default useAuth;
