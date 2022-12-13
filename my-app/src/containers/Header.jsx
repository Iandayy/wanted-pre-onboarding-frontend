import Rink from "../components/Rink";

const Header = () => {
  const token = window.localStorage.getItem("JWT");

  const signoutHandler = () => {
    window.localStorage.clear();
    window.location.replace("/");
  };

  return (
    <header className="flex justify-between items-center m-5">
      <p className="text-3xl font-bold text-[#22223b] italic cursor-pointer">
        Todo List
      </p>
      {!token && (
        <section>
          <Rink className="pr-2" to="/signin" str="Sign In" />
          <Rink to="/signup" str="Sign Up" />
        </section>
      )}
      {token && (
        <section>
          <Rink str="Sign Out" to="/" onClick={signoutHandler} />
        </section>
      )}
    </header>
  );
};

export default Header;
