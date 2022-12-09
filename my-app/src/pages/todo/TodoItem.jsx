const TodoItem = ({ items }) => {
  console.log(items);
  console.log(items);
  return (
    <div>
      <section>
        <ul>
          <li>{items.todo}</li>
        </ul>
      </section>
    </div>
  );
};

export default TodoItem;
