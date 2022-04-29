import React, {useState} from "react";
import {Layout} from "antd";
import {UserHeader} from "../../components/layout/header";
import {UserFooter} from "../../components/layout/footer";
import {StudentSider} from "../../components/layout/sider/student-sider";


export const Dashboard = () => {
    const name="John" //no more access to name, since user details are read in Profile Component
    const [role, setRole]=useState("student")

    const componentsSwitch = (key: any) => {
        switch (key) {
            case 'student':
                return <StudentSider/>
            case "teacher":
                return ;
            case "chief":
                return ;
            case "admin":
                return ;
            default:
                break;
        }
    };

    return (
        <div id="dashboard">
            <Layout>
                <UserHeader name={name}/>
                <Layout>
                    {componentsSwitch(role)}
                    <UserFooter/>
                </Layout>
            </Layout>
        </div>

    );
};
