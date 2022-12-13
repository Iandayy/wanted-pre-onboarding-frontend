const EditTodo = ({ items, setEditValue, setIsChecked }) => {
  const editValueChangeHandler = (e) => {
    setEditValue(e.target.value);
  };

  const isCheckedChangeHandler = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      <input
        id="todo"
        type="text"
        name="todo"
        defaultValue={items.todo}
        onChange={editValueChangeHandler}
        className="p-2 w-full border-2 rounded-md"
      />
      <input
        id="isCompleted"
        type="checkbox"
        name="isCompleted"
        defaultValue={items.isCompleted}
        onChange={isCheckedChangeHandler}
        className="ml-1"
      />
    </>
  );
};

export default EditTodo;
