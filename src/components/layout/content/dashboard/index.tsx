import {Breadcrumb} from "antd";
import React from "react";
import {Profile} from "./UserProfile";
import {Information} from "./InfoCard";
import {StudentCertificate} from "./StudentCertificateCard";
import {Content} from "antd/lib/layout/layout";


export const DashboardContent = () => {
    return (
        <Content style={{ padding: "0 10px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Log in</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
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
                <Profile/>
                <Information/>
                <StudentCertificate/>
            </div>
        </Content>
    );
};