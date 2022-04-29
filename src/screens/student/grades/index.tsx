import React from "react";
import { GradesTable } from "./GradesTable";

//• view their grades for each discipline
export const GradesContent = () => {
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
      <GradesTable data={data} />
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
