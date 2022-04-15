import { Route } from "../enums/Route";
import { Route as RouteConfig } from "../models/Route";
import { Home } from "../screens/home";
import { Login } from "../screens/login";

export const routes: RouteConfig[] = [
  {
    path: Route.Home,
    component: Home,
  },
  {
    path: Route.Login,
    component: Login,
  },
];
