import homeImg from "../../images/homeImg.jpg";

const Home = () => {
  const token = window.localStorage.getItem("JWT");
  if (token) window.location.replace("/todos");
  return (
    <article className="flex flex-col justify-center items-center text-xl mt-10">
      <p className="my-5">Let's start the 'To-Do List' !</p>
      <img src={homeImg} alt="home" className="w-3/5" />
    </article>
  );
};

export default Home;
