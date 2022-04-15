import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Navigate,
  Route as RouteComponent,
  RouteProps,
} from "react-router-dom";
import { Role } from "../enums/Role";
import { useState } from "react";
import { matchRole } from "../utils/auth";
import { useEffect } from "react";
import { Route } from "../enums/Route";

interface ProtectedRouteProps extends RouteProps {
  authorizedRoles: Role[];
}

export const ProtectedRoute = ({
  authorizedRoles,
  ...rest
}: ProtectedRouteProps) => {
  const { user } = useContext(UserContext);
  const [isAuthorized, setAuthorized] = useState(
    matchRole(authorizedRoles, user.role)
  );

  useEffect(() => {
    setAuthorized(matchRole(authorizedRoles, user.role));
  }, [user.role, authorizedRoles]);

  return isAuthorized ? (
    <RouteComponent {...rest} />
  ) : (
    <Navigate to={Route.Home} />
  );
};
