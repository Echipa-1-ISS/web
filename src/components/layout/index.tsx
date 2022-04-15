import React, { PropsWithChildren } from "react";
import { Header } from "./header";
import "./main.css";

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div id="layout">
      <Header />
      <div id="layout-content">{children}</div>
    </div>
  );
};
