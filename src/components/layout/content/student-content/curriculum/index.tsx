import {Content} from "antd/lib/layout/layout";
import {Breadcrumb} from "antd";
import React from "react";
import {CurriculumTable} from "./CurriculumTable";

export const CurriculumContent = () => {
    const data = [
        {
            key: '1',
            crt: 1,
            name: "ISS1",
        },
        {
            key: '2',
            crt: 2,
            name: "ISS2",
        },
        {
            key: '3',
            crt: 3,
            name: "ISS3",
        },
    ];
    
    return (
        <Content style={{ padding: "0 10px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Log in</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>View Curriculum</Breadcrumb.Item>
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
                <CurriculumTable data={data}/>
            </div>
        </Content>
    );
};