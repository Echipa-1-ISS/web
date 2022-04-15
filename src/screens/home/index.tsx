import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Route } from "../../enums/Route";

export const Home = () => {
  const { user } = useContext(UserContext);

  return user.isAuthenticated ? <Home /> : <Navigate to={Route.Login} />;
};
