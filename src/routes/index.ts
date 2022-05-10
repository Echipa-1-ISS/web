import { Route } from "../enums/Route";
import { Route as RouteConfig } from "../models/Route";
import { Login } from "../screens/login";
import { Dashboard } from "../screens/dashboard";
import { GradesContent } from "../screens/student/grades";
import { CurriculumContent } from "../screens/student/curriculum";
import { OptionalCourses } from "../screens/teacher/optional-courses";

export const routes: RouteConfig[] = [
  {
    path: Route.Login,
    component: Login,
  },
  {
    path: Route.Home,
    component: Dashboard,
    isProtected: true,
  },
  {
    path: Route.Grades,
    component: GradesContent,
    isProtected: true,
  },
  {
    path: Route.Curriculum,
    component: CurriculumContent,
    isProtected: true,
  },
  {
    path: Route.OptionalCourses,
    component: OptionalCourses,
    isProtected: true,
  },
];
