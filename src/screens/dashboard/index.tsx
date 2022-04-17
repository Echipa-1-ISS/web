import React, {useEffect, useState} from "react";
import "./main.css";
import axios from "axios";
import {Profile} from "../../components/dashboard/UserProfile"
import {Layout, Typography, Avatar, Menu, Breadcrumb, Card, Dropdown} from 'antd';
import {UserOutlined, InfoOutlined} from '@ant-design/icons';

const {Header, Footer, Sider, Content} = Layout;
const {Title} = Typography;
const {SubMenu} = Menu;

export const Dashboard = () => {
    const [name, getName] = useState("John");
    const [age, getAge] = useState(23);
    const [email, getEmail] = useState("johny99@yahoo.com");
    const [picture, getPicture] = useState("https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528");

    const backend_url = 'http://localhost:8000/'

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${backend_url}.data`)
            .then((response) => {
                const name = response.data.name;
                getName(name);
                const age = response.data.age;
                getAge(age);
                const email = response.data.email;
                getEmail(email);
                const pic_url = response.data.url;
                getPicture(pic_url);
            })
            .catch(error => console.error(`Error: ${error}`))
    }

    const menu = (
        <Menu style={{width: 100, float:"right", marginTop: 40}}>
            <Menu.Item key="0">
                <a href="#1">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.cs.ubbcluj.ro/about-the-faculty/departments/department-of-computer-science/">Teachers</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <a href="#Logout">Log out</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div id="dashboard">
            <Layout>
                <Header style={{padding: 10}}>
                    <Dropdown overlay={menu}>
                        <div onClick={e => e.preventDefault()}>
                            <Avatar style={{float: "right", marginRight: 30}} icon={<UserOutlined/>}/>
                        </div>
                    </Dropdown>
                    <Title style={{color: "white"}} level={3}>{name}</Title>
                </Header>
                <Layout>
                    <Sider>
                        <Menu defaultSelectedKeys={['dashboard']} mode={"inline"}>
                            <Menu.Item key={"dashboard"}>Dashboard</Menu.Item>
                            <Menu.Item key={"enrol"}>Enrol</Menu.Item>
                            <Menu.Item key={"curriculum"}>View Curriculum</Menu.Item>
                            <Menu.Item key={"grade"}>View Grades</Menu.Item>
                            <SubMenu key={"aboutus"} icon={<InfoOutlined/>} title="About us">
                                <Menu.ItemGroup key={"title"} title={"title"}>
                                    <Menu.Item key={"location1"}>Location 1</Menu.Item>
                                    <Menu.Item key={"location2"}>Location 2</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{padding: '0 50px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Log in</Breadcrumb.Item>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-content"
                                 style={{
                                     minHeight: 800,
                                     background: "#fff",
                                     padding: 24,
                                     display: "flex",
                                     flexDirection: "row"
                                 }}>
                                <Profile name={name} age={age} email={email}
                                         url={picture}/>
                                <Card hoverable title="Informatii" style={{width: 600, marginLeft: 100, height: 400}}>
                                    <p>Începând cu anul universitar 2020/2021, Universitatea Babeș-Bolyai pune la
                                        dispoziție studenților săi pentru continuitatea activității didactice, platforma
                                        online specifică activității de studiu Microsoft Teams și adresa de email
                                        instituțională.. <br/>
                                        UBB în calitate de operator de date cu caracter personal a luat toate măsurile
                                        pentru a vă asigura protejarea datelor cu caracter personal în conformitate cu
                                        Regulamentul (UE) 2016/679 al Parlamentului European şi al Consiliului din 27
                                        aprilie 2016 privind protecţia persoanelor fizice în ceea ce priveşte
                                        prelucrarea datelor cu caracter personal şi privind libera circulaţie a acestor
                                        date (GDPR) <br/>
                                        Pentru detalii suplimentare vă invităm să accesați secțiunea dedicată protecției
                                        datelor cu carcater personal de pe site-ul UBB.
                                        https://www.ubbcluj.ro/ro/politici/ <br/>
                                        Astfel, pentru continuitatea activității didactice, atât cadrele didactice cât
                                        și studenții sunt rugați să folosească platforma online specifică activității de
                                        studiu Microsoft Teams. <br/>
                                        Pentru accesarea acestei platforme aveti nevoie de următoarele date de logare:
                                        Platforma: https://portal.office.com</p>
                                </Card>
                                <Card hoverable title={"Eliberarea adeverinţelor de student"} style={{width: 400, marginLeft: 100, height: 450}}>
                                    <p>Pentru toţi studenţii Facultăţii de Matematică şi Informatică, începând cu data de 27 septembrie 2021 se vor elibera adeverinţe de student. Modalitatea de obţinere a adeverinţei de student este următoarea: Studentul completează toate datele personale şi scopul solicitării eliberării adeverinţei la formularul de la adresa: https://forms.gle/drqqY8FqjsJA2hh7A, după care personalul secretarial va emite adeverinţa care se trimite scanată la adresa de email indicată de student. În situaţia în care, un student are nevoie de mai multe adeverinţe, se va completa formularul de mai multe ori. Dacă un student are nevoie de adeverinţa de student în original va specifica acest aspect în formular şi o va putea ridica de la Secretariatul facultăţii în orice zi lucrătoare în intervalul orar 9,00-12,00.</p>
                                </Card>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Academic-info ©2022 Created by Echipa1</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};
