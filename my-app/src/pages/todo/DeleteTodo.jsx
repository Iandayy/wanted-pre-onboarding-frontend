import instance from "../../service/request";

import Button from "../../components/Button";

const DeleteTodo = ({ id }) => {
  const token = window.localStorage.getItem("JWT");

  const deleteHandler = async () => {
    if (window.confirm("Are you sure you want to delete ?")) {
      await instance.delete(`/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.replace("/todos");
      return;
    } else return;
  };
  return <Button str="Delete" onClick={deleteHandler} />;
};

export default DeleteTodo;
