import {Breadcrumb} from "antd";
import React from "react";
import {Profile} from "./UserProfile";
import {Information} from "./InfoCard";
import {StudentCertificate} from "./StudentCertificateCard";
import {Content} from "antd/lib/layout/layout";

export type ProfileProps = {
    name: string;
    age: number;
    email: string;
    url: string;
};

export const DashboardContent = ({ name, age, email, url }: ProfileProps) => {
    return (
        <Content style={{ padding: "0 50px" }}>
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
                <Profile name={name} age={age} email={email} url={url} />
                <Information/>
                <StudentCertificate/>
            </div>
        </Content>
    );
};