import React, { useContext } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";

import "./main.css";
import { useNavigate } from "react-router-dom";
import { Route } from "../../../enums/Route";
import { UserContext } from "../../../context/UserContext";

export const UserHeader = ({ name }: { name?: string }) => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate(Route.Login);
  };

  const menu = (
    <Menu style={{ width: 100, float: "right", marginTop: 40 }}>
      <Menu.Item key="0">
        <a href="#1">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.cs.ubbcluj.ro/about-the-faculty/departments/department-of-computer-science/">
          Teachers
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <span onClick={handleLogout}>Log out</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header id="header">
      <Dropdown overlay={menu}>
        <div onClick={(e) => e.preventDefault()}>
          <Avatar
            style={{ float: "right", marginRight: 30 }}
            icon={<UserOutlined />}
          />
        </div>
      </Dropdown>
      <Title style={{ color: "white", marginBottom: 0 }} level={3}>
        Hello, {name ?? "there"}
      </Title>
    </Header>
  );
};
