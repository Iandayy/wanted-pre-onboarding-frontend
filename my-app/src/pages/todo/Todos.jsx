import { useState, useEffect } from "react";
import instance from "../../service/request";

import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
  const token = window.localStorage.getItem("JWT");
  if (!token) window.location.replace("/");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await instance.get("/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(res.data);
    };
    getTodos();
  }, [token]);

  return (
    <div className="flex flex-col justify-center itmes-center mt-10 sm:mx-12 md:mx-24 lg:mx-36">
      <NewTodo token={token} />
      {todos.length === 0 && <p>Please add todo.</p>}
      {todos.length > 0 && (
        <section className="flex flex-col-reverse justify-center itmes-center">
          {todos.map((todo) => (
            <TodoItem key={todo.id} token={token} items={todo} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Todos;
