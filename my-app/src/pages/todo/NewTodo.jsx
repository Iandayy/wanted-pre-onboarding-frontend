import { useState, useRef } from "react";
import instance from "../../service/request";

import Button from "../../components/Button";

const NewTodo = ({ token }) => {
  const [todo, setTodo] = useState("");
  const todoInput = useRef();

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const item = { todo };

    if (todo.length < 1) {
      todoInput.current.focus();
      alert("Please write at least 1 character.");
      return;
    }

    try {
      await instance.post("/todos", item, {
        headers: {
          Authorization: `Bearer ${token}`,
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
        ref={todoInput}
        value={todo}
        onChange={todoChangeHandler}
        className="block w-full p-2 my-2 border-b-2 border-solid border-[#231942] rounded bg-slate-100 shadow-md"
      />
      <Button onClick={submitHandler} str="Add" className="w-1/5" />
    </form>
  );
};

export default NewTodo;
