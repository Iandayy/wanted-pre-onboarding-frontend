import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const signUp = useAuth({
    title: "Sign Up",
    path: "signup",
    url: "/auth/signup",
  });
  return <>{signUp}</>;
};

export default SignUp;
