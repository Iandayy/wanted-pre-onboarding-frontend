import { useState } from "react";

import instance from "../../../service/request";

import Button from "../../../components/Button";

const Create = () => {
  const token = window.localStorage.getItem("JWT");

  const [todo, setTodo] = useState("");

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const item = { todo };

    try {
      await instance.post("/todos", item, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      alert(`Add your '${todo}'`);
      setTodo("");
      window.location.replace("/todos");
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <form className="flex justify-center items-center">
      <section className="pr-2">
        <label htmlFor="todo" className="text-lg pr-2">
          Todo :
        </label>
        <input
          id="todo"
          type="text"
          name="todo"
          value={todo}
          onChange={todoChangeHandler}
          className="text-center w-48 p-2 border-2 rounded-md"
        />
      </section>
      <Button onClick={submitHandler} str="Add" />
    </form>
  );
};

export default Create;
