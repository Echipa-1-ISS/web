import { Route } from "../enums/Route";
import { Route as RouteConfig } from "../models/Route";
import { Home } from "../screens/home";
import { Login } from "../screens/login";
import { Dashboard } from "../screens/dashboard";
import {GradesContent} from "../components/layout/content/student-content/grades";
import {CurriculumContent} from "../components/layout/content/student-content/curriculum";

export const routes: RouteConfig[] = [
  {
    path: Route.Home,
    component: Home,
  },
  {
    path: Route.Login,
    component: Login,
  },
  {
    path: Route.Dashboard,
    component: Dashboard,
  },
  {
    path: Route.Grades,
    component: GradesContent,
  },
  {
    path: Route.Curriculum,
    component: CurriculumContent,
  },
];
