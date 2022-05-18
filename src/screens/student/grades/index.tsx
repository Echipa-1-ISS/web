import React, {useEffect, useState} from "react";
import {GradesTable} from "./GradesTable";
import {OptionalCoursesContent} from "../../chief/optional-courses";
import {Card} from "antd";
import UserService from "../../../services/UserService";
import {AxiosResponse} from "axios";
import './main.css'

//• students can view their grade for each discipline
export const GradesContent = () => {
    const [data, setData] = useState([
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
            id: 3,
            discipline: "OS",
            grade: 9,
        },
    ]);

    useEffect(() => {
        const fetchData = () => {
            const userId = Number(localStorage.getItem("userId"));

            UserService.getInfo(userId)
                .then(({data: {tableContent}}: AxiosResponse<any>) => {
                    setData(tableContent);
                })
                .catch((error) =>
                    console.error(`Error: ${error}`)
                );
        };

        fetchData();
    }, []);

    return (
        <div className="site-layout-content">
            <Card
                title="Grades: "
                hoverable
                id="grades-card-style"
            >
                <GradesTable data={data}/>
            </Card>

            <Card
                title="Optional courses: "
                hoverable
                id="optional-courses-style"
            >
                <OptionalCoursesContent/>
            </Card>
        </div>
    );
};
