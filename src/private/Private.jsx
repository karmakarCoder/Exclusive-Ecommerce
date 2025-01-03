import React, { useContext } from "react";
import AuthContext from "../auth/context/authContext";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate to={"/sign"} state={location?.pathname}></Navigate>;
};

export default Private;
