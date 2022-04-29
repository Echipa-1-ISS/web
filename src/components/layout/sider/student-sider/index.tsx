import React, {useState} from "react";
import {Tabs} from "antd";
import {DashboardContent} from "../../content/dashboard";
import {GradesContent} from "../../content/student-content/grades";
import {CurriculumContent} from "../../content/student-content/curriculum";

const {TabPane} = Tabs;

export const StudentSider = () => {
    return (<Tabs type="card" tabPosition={"left"}>
        <TabPane className="tabs" tab="Dashboard" key="1">
            <DashboardContent/>
        </TabPane>
        <TabPane className="tabs" tab="View Grades" key="2">
            <GradesContent/>
        </TabPane>
        <TabPane className="tabs" tab="View Curriculum" key="3">
            <CurriculumContent/>
        </TabPane>
    </Tabs>);
}