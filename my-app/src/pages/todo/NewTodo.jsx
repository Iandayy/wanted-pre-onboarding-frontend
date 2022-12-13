import { useState } from "react";
import instance from "../../service/request";

import Button from "../../components/Button";

const NewTodo = ({ token }) => {
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
    <form className="mb-10">
      <label htmlFor="todo" className="text-lg pr-2">
        Todo
      </label>
      <input
        id="todo"
        type="text"
        name="todo"
        value={todo}
        onChange={todoChangeHandler}
        className="block w-full p-2 my-2 border-b-2 border-solid border-[#231942] rounded bg-slate-100 shadow-md"
      />
      <Button onClick={submitHandler} str="Add" className="w-1/5" />
    </form>
  );
};

export default NewTodo;
