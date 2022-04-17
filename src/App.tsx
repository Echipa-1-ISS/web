import React, { useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteComponent,
} from "react-router-dom";
import { Layout } from "./components/layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserContext, getDefaultUser } from "./context/UserContext";
import { Route as RouteModel } from "./models/Route";
import { User } from "./models/User";
import { routes } from "./routes";

const renderRoute = ({
  path,
  component: Component,
  isProtected,
  authorizedRoles,
}: RouteModel) =>
  isProtected ? (
    <ProtectedRoute
      path={path}
      element={<Component />}
      authorizedRoles={authorizedRoles!}
      key={path}
    />
  ) : (
    <RouteComponent key={path} path={path} element={<Component />} />
  );

const App = () => {
  const [user, setUser] = useState<User>(getDefaultUser());
  const LayoutComponent = user.isAuthenticated ? Layout : Fragment;

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <LayoutComponent>
          <Routes>
            {routes.map((route: RouteModel) => renderRoute(route))}
          </Routes>
        </LayoutComponent>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
