const Home = () => {
  const token = window.localStorage.getItem("JWT");
  if (token) window.location.replace("/todos");
  return (
    <article className="flex justify-center items-center h-96 text-xl">
      <p>Let's start the 'To-Do List' !</p>
    </article>
  );
};

export default Home;
