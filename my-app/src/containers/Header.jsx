import Rink from "../components/Rink";

const Header = () => {
  const token = window.localStorage.getItem("JWT");

  const signoutHandler = () => {
    alert("You are signed out.");
    window.localStorage.clear();
    window.location.replace("/");
  };

  return (
    <header className="flex justify-between items-center m-5">
      {!token && (
        <>
          <Rink
            className="text-3xl font-bold text-[#22223b] italic cursor-pointer"
            to="/"
            str="Todo List"
          />
          <section>
            <Rink className="pr-2" to="/signin" str="Sign In" />
            <Rink to="/signup" str="Sign Up" />
          </section>
        </>
      )}
      {token && (
        <>
          <p className="text-3xl font-bold text-[#22223b] italic cursor-pointer">
            Todo List
          </p>
          <section>
            <Rink str="Sign Out" to="/" onClick={signoutHandler} />
          </section>
        </>
      )}
    </header>
  );
};

export default Header;
