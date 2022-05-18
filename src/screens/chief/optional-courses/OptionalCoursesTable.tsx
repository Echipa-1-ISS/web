import { Table } from "antd";
import { columns } from "./columns";

export const OptionalCoursesTable = ({ data }: { data: any }) => {
  return (
    <Table dataSource={data} columns={columns} className="table-content" />
  );
};
