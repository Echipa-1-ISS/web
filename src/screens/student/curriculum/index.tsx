import React from "react";
import {CurriculumTable} from "./CurriculumTable";
import './main.css'

export const CurriculumContent = () => {
    const data = [
        {
            key: "1",
            crt: 1,
            name: "ISS1",
        },
        {
            key: "2",
            crt: 2,
            name: "ISS2",
        },
        {
            key: "3",
            crt: 3,
            name: "ISS3",
        },
    ];

    return (
        <div className="site-layout-content">
            <CurriculumTable data={data}/>
        </div>
    );
};
