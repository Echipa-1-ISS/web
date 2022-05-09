import { Table } from 'antd';
import "./main.css"
import { AlignType } from 'rc-table/lib/interface';


export const OptionalCoursesTable = ({data}: { data: any }) => {
    const table_columns=[
        {
            key: 1,
            title: 'Discipline',
            dataIndex: 'disciplineName',
            align: 'center' as AlignType,
        },
        {
            key: 2,
            title: 'Professor',
            dataIndex: 'teacherName',
            align: 'center' as AlignType,
        },
        {
            key: 3,
            title: 'Semester',
            dataIndex: 'semester',
            align: 'center' as AlignType,
        },
        {
            key: 4,
            title: 'Year',
            dataIndex: 'year',
            align: 'center' as AlignType,
        },
        {
            key: 5,
            title: 'Specialization',
            dataIndex: 'specialization',
            align: 'center' as AlignType,
        },
    ];

    return (
        <Table dataSource={data} columns={table_columns} id="table-content"/>
    );
}