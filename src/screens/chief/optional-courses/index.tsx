import React, { useEffect, useState } from "react";
import { OptionalCoursesTable } from "./OptionalCoursesTable";
import UserService from "../../../services/UserService";
import { AxiosResponse } from "axios";
import Title from "antd/lib/typography/Title";
import "./main.css";

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

  useEffect(() => {
    const fetchData = () => {
      const userId = Number(localStorage.getItem("userId"));

      //TODO CourseService
      UserService.getInfo(userId)
        .then(({ data: { tableContent } }: AxiosResponse<any>) => {
          setData(tableContent);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };

    fetchData();
  }, []);

  return (
    <>
      <Title id="title-style">View Optional Courses</Title>
      <OptionalCoursesTable data={data} />
    </>
  );
};
