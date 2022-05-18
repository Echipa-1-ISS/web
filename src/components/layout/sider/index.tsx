import { NavLink } from "react-router-dom";
import { Route } from "../../../enums/Route";
import {
  AiFillHome as HomeIcon,
  AiOutlineFileImage as FileIcon,
  AiOutlineCheckCircle as CheckIcon,
} from "react-icons/ai";

import "./main.css";
import { Role } from "../../../enums/Role";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const links = [
  {
    path: Route.Home,
    icon: <HomeIcon />,
    label: "Home",
    authorizedRoles: [
      Role.Admin,
      Role.DepartmentChief,
      Role.Student,
      Role.Teacher,
    ],
  },
  {
    path: Route.Curriculum,
    icon: <FileIcon />,
    label: "Curriculum",
    authorizedRoles: [Role.Student],
  },
  {
    path: Route.Grades,
    icon: <CheckIcon />,
    label: "Grades",
    authorizedRoles: [Role.Student],
  },
  {
    path: Route.Courses,
    icon: <CheckIcon />,
    label: "Courses",
    authorizedRoles: [Role.Teacher, Role.DepartmentChief],
  },
  {
    path: Route.OptionalCourses,
    icon: <CheckIcon />,
    label: "Approve courses",
    authorizedRoles: [Role.DepartmentChief],
  },
];

export const Sider = () => {
  const {
    user: { role },
  } = useContext(UserContext);

  const filteredLinks = links.filter((x) => x.authorizedRoles.includes(role));

  return (
    <div id="sider">
      {filteredLinks.map((x) => (
        <NavLink to={x.path} className="link">
          {x.icon}
          <span>{x.label}</span>
        </NavLink>
      ))}
    </div>
  );
};
