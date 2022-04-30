import { Route } from "../enums/Route";
import { Route as RouteConfig } from "../models/Route";
import { Login } from "../screens/login";
import { Dashboard } from "../screens/dashboard";
import { GradesContent } from "../screens/student/grades";
import { CurriculumContent } from "../screens/student/curriculum";

export const routes: RouteConfig[] = [
  {
    path: Route.Login,
    component: Login,
  },
  {
    path: Route.Home,
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
