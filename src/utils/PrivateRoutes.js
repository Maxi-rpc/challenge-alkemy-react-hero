import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ path, exact, element }) => {
  const token = localStorage.getItem("token");
  return token ? (
    <Route path={path} exact={exact} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
