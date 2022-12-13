import { useState } from "react";
import instance from "../../service/request";

import Button from "../../components/Button";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

const TodoItem = ({ token, items }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [isChecked, setIsChecked] = useState(items.isCompleted);

  const editHandler = () => {
    setIsEdit(true);
  };

  const cancelHandler = () => {
    setIsEdit(false);
  };

  const completeHandler = async () => {
    const item = { todo: editValue, isCompleted: items.isCompleted };
    await instance.put(`/todos/${items.id}`, item, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    alert(`Update your '${editValue}'`);
    setIsEdit(false);
    window.location.replace("/todos");
  };

  console.log(isChecked);

  return (
    <section className="flex justify-between items-center sm:flex-col rounded bg-slate-50 hover:bg-slate-100 mb-3 px-4 py-2 shadow">
      {!isEdit && (
        <>
          <ul className="flex sm:justify-center p-2 w-3/4 lg:w-4/5">
            <li className="mr-2 break-all">{items.todo}</li>
            <input
              name="isCompleted"
              type="checkbox"
              defaultChecked={isChecked}
            />
          </ul>
          <div>
            <Button str="Update" onClick={editHandler} className="mx-1" />
            <DeleteTodo id={items.id} />
          </div>
        </>
      )}
      {isEdit && (
        <>
          <EditTodo
            items={items}
            setEditValue={setEditValue}
            setIsChecked={setIsChecked}
          />
          <div className="flex justify-end">
            <Button str="Cancel" onClick={cancelHandler} className="mx-1" />
            <Button str="Complete" onClick={completeHandler} />
          </div>
        </>
      )}
    </section>
  );
};

export default TodoItem;
