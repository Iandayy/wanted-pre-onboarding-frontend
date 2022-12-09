import { useState, useEffect } from "react";

import instance from "../../service/request";

import Create from "./crud/Create";
import Read from "./crud/Read";

const Todos = () => {
  const token = window.localStorage.getItem("JWT");

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
    <div className="mt-10">
      {todos.length === 0 && <section>Please add todo.</section>}
      {todos.length >= 1 && (
        <div>
          <Create />
          <section className="mt-10">
            {todos.map((todo) => (
              <Read key={todo.id} items={todo} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default Todos;
