import Rink from "../components/Rink";

const Header = () => {
  const token = window.localStorage.getItem("JWT");

  return (
    <header className="flex justify-between items-center m-5">
      <Rink
        className="text-3xl font-bold text-[#22223b] italic"
        to="/"
        str="Todo List"
      />
      {!token && (
        <section className="">
          <Rink className="pr-2" to="/signin" str="Sign In" />
          <Rink to="/signup" str="Sign Up" />
        </section>
      )}
      {token && (
        <section className="">
          <Rink className="pr-2" str="My Page" />
          <Rink str="Sign Out" />
        </section>
      )}
    </header>
  );
};

export default Header;
