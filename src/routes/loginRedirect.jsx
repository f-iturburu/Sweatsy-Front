import { Navigate, Outlet } from "react-router-dom";

const LoginRedirect = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user-token")) || null;

  if (token) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default LoginRedirect;