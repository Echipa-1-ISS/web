import { NavLink } from "react-router-dom";
import { Route } from "../../../enums/Route";
import {
  AiFillHome as HomeIcon,
  AiOutlineFileImage as FileIcon,
  AiOutlineCheckCircle as CheckIcon,
} from "react-icons/ai";

import "./main.css";

export const Sider = () => {
  return (
    <div id="sider">
      <NavLink to={Route.Home} className="link">
        <HomeIcon />
        <span>Home</span>
      </NavLink>
      <NavLink to={Route.Curriculum} className="link">
        <FileIcon />
        <span>Curriculum</span>
      </NavLink>
      <NavLink to={Route.Grades} className="link">
        <CheckIcon />
        <span>Grades</span>
      </NavLink>
    </div>
  );
};
