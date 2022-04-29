import React from "react";
import { CurriculumTable } from "./CurriculumTable";

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
      <CurriculumTable data={data} />
    </div>
  );
};
