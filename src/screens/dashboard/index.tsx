import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {
    Layout,
    Menu,
} from "antd";
import {InfoOutlined} from "@ant-design/icons";
import {DashboardContent} from "../../components/dashboard";
import {CurriculumContent} from "../../components/curriculum";
import {GradesContent} from "../../components/grades";
import {UserHeader} from "../../components/layout/header";
import {UserFooter} from "../../components/layout/footer";
import UserService from "../../services/UserService";
import {Route} from "../../enums/Route";
import {useNavigate} from "react-router-dom";

const {Sider, Content} = Layout;
const {SubMenu} = Menu;

export const Dashboard = () => {
        const [id] = useState(1);
        const [name, setName] = useState("John");
        const [age, setAge] = useState(23);
        const [email, setEmail] = useState("johny99@yahoo.com");
        const [picture, setPicture] = useState(
            "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
        );
        const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");
        const navigate = useNavigate();

        const fetchData = (e: any) => {
            e.preventDefault();
            UserService.getProfileInfo(id)
                .then(({data: {name, age, email, picture}}: AxiosResponse<any>) => {
                    setName(name);
                    setAge(age);
                    setEmail(email);
                    setPicture(picture)
                    navigate(Route.Dashboard);
                })
                .catch((error) => console.error(`Error: ${error}`));
        };
        /*
        useEffect(() => {
            fetchData();
          }, []);

          const fetchData = () => {
            axios
              .get(`${backend_url}.data`)
              .then((response) => {
                const name = response.data.name;
                setName(name);
                const age = response.data.age;
                setAge(age);
                const email = response.data.email;
                setEmail(email);
                const pic_url = response.data.url;
                setPicture(pic_url);
              })
              .catch((error) => console.error(`Error: ${error}`));
          };
         */

        const dashboard = (
            <DashboardContent name={name} age={age} email={email} url={picture}/>
        );

        const curriculum = (
            <CurriculumContent/>
        );

        const grade = (
            <GradesContent/>
        );

        const componentsSwitch = (key: any) => {
            switch (key) {
                case "dashboard":
                    return dashboard;
                case "curriculum":
                    return curriculum;
                case "grade":
                    return grade;
                default:
                    break;
            }
        };

        return (
            <div id="dashboard">
                <Layout>
                    <UserHeader name={name}/>
                    <Layout>
                        <Sider>
                            <Menu
                                mode={"inline"}
                                selectedKeys={[selectedMenuItem]}
                                onClick={(e) => setSelectedMenuItem(e.key)}
                            >
                                <Menu.Item key="dashboard">Dashboard</Menu.Item>
                                <Menu.Item key={"curriculum"}>View Curriculum</Menu.Item>
                                <Menu.Item key="grade">View Grades</Menu.Item>
                                <SubMenu key={"aboutus"} icon={<InfoOutlined/>} title="About us">
                                    <Menu.ItemGroup key={"title"} title={"title"}>
                                        <Menu.Item key={"location1"}>Location 1</Menu.Item>
                                        <Menu.Item key={"location2"}>Location 2</Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{padding: "0 50px"}}>
                                {componentsSwitch(selectedMenuItem)}
                            </Content>
                            <UserFooter/>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
;
