import React, {useEffect, useState} from "react";
import {OptionalCoursesTable} from "./OptionalCoursesTable";
import {useNavigate} from "react-router-dom";
import UserService from "../../../services/UserService";
import {AxiosResponse} from "axios";
import {Route} from "../../../enums/Route";
import {Card} from "antd";
import Title from "antd/lib/typography/Title";

export const OptionalCoursesContent = () => {

    const [data, setData] = useState([
        {
            disciplineName: "OOP",
            teacherName: "Gabi Mircea",
            semester: 2,
            year: 1,
            specialization: "Computer Science",
        },
        {
            disciplineName: "FP",
            teacherName: "Gabi Mircea",
            semester: 2,
            year: 1,
            specialization: "Computer Science",
        },
        {
            disciplineName: "MPP",
            teacherName: "Gabi Mircea",
            semester: 2,
            year: 1,
            specialization: "Computer Science",
        },
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = () => {
            const userId = Number(localStorage.getItem("userId"));
            UserService.getInfo(userId)
                .then(({data: {tableContent}}: AxiosResponse<any>) => {
                    setData(tableContent);
                    navigate(Route.OptionalCourses);
                })
                .catch((error) => console.error(`Error: ${error}`));
        };

        fetchData();
    }, []);

    return (
        <><Title style={{
            textAlign: "center",
            flex: 1,
            color: "#00152a",
        }}>View Optional Courses</Title><OptionalCoursesTable data={data}/></>
    );
};