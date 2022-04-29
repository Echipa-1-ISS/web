import {Content} from "antd/lib/layout/layout";
import {Breadcrumb} from "antd";
import React from "react";
import {GradesTable} from "./GradesTable";

//• view their grades for each discipline
export const GradesContent = () => {
    return (
        <Content style={{padding: "0 10px"}}>
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
                <GradesTable data={data}/>
            </div>
        </Content>
    );
};


const data = [
    {
        id: 1,
        discipline: "OOP",
        grade: 10,
    },
    {
        id: 2,
        discipline: "DSA",
        grade: 5,
    },
    {
        id:3,
        discipline: "OS",
        grade: 9,
    },
];