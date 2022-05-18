import { Table } from "antd";
import { useContext, useEffect, useState } from "react";
import api from "../../../api";
import { ApiEndpoints } from "../../../api/endpoints";
import { UserContext } from "../../../context/UserContext";
import { TeacherCourse } from "../../../models/TeacherCourses";
import { columns } from "./columns";

interface CoursesTableProps {
  courses: TeacherCourse[];
  isLoading: boolean;
}

export const CoursesTable = ({ courses, isLoading }: CoursesTableProps) => {
  return (
    <div className="courses-table-container">
      <Table
        className="table-content"
        dataSource={courses}
        columns={columns}
        loading={isLoading}
        pagination={false}
      />
    </div>
  );
};
