import React, { PropsWithChildren } from "react";
import "./main.css";

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div id="layout">
      <div id="layout-content">{children}</div>
    </div>
  );
};
