// import Delete from "./Delete";
// import Update from "./Update";

const Read = ({ items }) => {
  console.log(items);
  return (
    <div className="flex flex-col-reverse justify-center itmes-center">
      <section className="flex justify-center itmes-center mb-3">
        <p className="mr-2">{items.todo}</p>
        <input name="isCompleted" type="checkbox" />
      </section>
      {/* <section>
        <Update />
        <Delete />
      </section> */}
    </div>
  );
};

export default Read;
