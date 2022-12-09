import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Todos from "../pages/todo/Todos";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default Router;
