import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const signIn = useAuth({
    title: "Sign In",
    path: "signin",
    url: "/auth/signin",
  });
  return <>{signIn}</>;
};

export default SignIn;
