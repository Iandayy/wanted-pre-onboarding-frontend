const EditTodo = ({ items, setEditValue, setIsChecked, editInputRef }) => {
  const editValueChangeHandler = (e) => {
    setEditValue(e.target.value);
  };

  const isCheckedChangeHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center p-2 w-full">
      <input
        id="isCompleted"
        type="checkbox"
        name="isCompleted"
        defaultChecked={items.isCompleted}
        onChange={isCheckedChangeHandler}
        className="mr-1"
      />
      <input
        id="todo"
        type="text"
        name="todo"
        ref={editInputRef}
        defaultValue={items.todo}
        onChange={editValueChangeHandler}
        className="w-full p-2 border-2 rounded-md"
      />
    </div>
  );
};

export default EditTodo;
