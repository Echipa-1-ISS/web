import { ColumnsType } from "antd/lib/table";

export const columns: ColumnsType<any> = [
  {
    key: 1,
    title: "Discipline",
    dataIndex: "disciplineName",
    align: "center",
  },
  {
    key: 2,
    title: "Professor",
    dataIndex: "teacherName",
    align: "center",
  },
  {
    key: 3,
    title: "Semester",
    dataIndex: "semester",
    align: "center",
  },
  {
    key: 4,
    title: "Year",
    dataIndex: "year",
    align: "center",
  },
  {
    key: 5,
    title: "Specialization",
    dataIndex: "specialization",
    align: "center",
  },
];
