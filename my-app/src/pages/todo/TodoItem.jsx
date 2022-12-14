import { useState, useRef } from "react";
import instance from "../../service/request";

import Button from "../../components/Button";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

const TodoItem = ({ token, items }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(items.todo);
  const [isChecked, setIsChecked] = useState(items.isCompleted);

  const editInputRef = useRef();

  const editHandler = () => {
    setIsEdit(true);
  };

  const cancelHandler = () => {
    setEditValue(items.todo);
    setIsChecked(items.isCompleted);
    setIsEdit(false);
  };

  const completeHandler = async () => {
    if (editValue.length < 1) {
      editInputRef.current.focus();
      alert("Please write at least 1 character.");
      return;
    }

    const item = { todo: editValue, isCompleted: isChecked };

    await instance.put(`/todos/${items.id}`, item, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert(`Update your '${editValue}'`);
    setIsEdit(false);
    window.location.replace("/todos");
  };

  return (
    <div className="flex justify-between items-center sm:flex-col rounded bg-slate-50 hover:bg-slate-100 mb-3 px-2 py-2 shadow">
      {!isEdit && (
        <>
          <ul className="flex sm:justify-center items-center p-2 w-3/4 lg:w-4/5">
            <input
              className="mr-2"
              name="isCompleted"
              type="checkbox"
              checked={items.isCompleted}
              readOnly
            />
            <li className="break-all">{items.todo}</li>
          </ul>
          <section className="flex">
            <Button str="Update" onClick={editHandler} className="mx-1" />
            <DeleteTodo id={items.id} />
          </section>
        </>
      )}
      {isEdit && (
        <>
          <EditTodo
            items={items}
            setEditValue={setEditValue}
            setIsChecked={setIsChecked}
            editInputRef={editInputRef}
          />
          <section className="flex">
            <Button str="Cancel" onClick={cancelHandler} className="mx-1" />
            <Button str="Complete" onClick={completeHandler} />
          </section>
        </>
      )}
    </div>
  );
};

export default TodoItem;
