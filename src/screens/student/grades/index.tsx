import React from "react";
import { GradesTable } from "./GradesTable";
import {OptionalCoursesContent} from "../../chief/optional-courses";
import {Card} from "antd";

//• view their grades for each discipline
export const GradesContent = () => {
    //<OptionalCoursesContent/> must be replaced with optionalCourses from student's year and semester
  return (
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
        <Card
            title={"Grades: "}
            hoverable
            style={{height: 400}}
        >
      <GradesTable data={data} />
        </Card>

        <Card
            title={"Optional courses: "}
            hoverable
            style={{height: 400, marginLeft: 100}}
        >
        <OptionalCoursesContent/>
        </Card>
    </div>
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
    id: 3,
    discipline: "OS",
    grade: 9,
  },
];
