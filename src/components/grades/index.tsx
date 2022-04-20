import {Content} from "antd/lib/layout/layout";
import {Breadcrumb} from "antd";
import React from "react";

export const GradesContent = () => {
    return (
        <Content style={{padding: "0 50px"}}>
            <Breadcrumb style={{margin: "16px 0"}}>
                <Breadcrumb.Item>Log in</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>View Grades</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className="site-layout-content"
                style={{
                    minHeight: 800,
                    background: "#fff",
                    padding: 24,
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                Soon grades
            </div>
        </Content>
    );
};