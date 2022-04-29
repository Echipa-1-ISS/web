import { Table } from 'antd';

//One grade per discipline
export const GradesTable = ({data}: { data: any }) => {
    const table_columns=[
        {
            key: 1,
            title: 'Discipline',
            dataIndex: 'discipline'
        },
        {
            key: 2,
            title: 'Grade',
            dataIndex: 'grade'
        },
    ];

    return (
        <Table dataSource={data} pagination={false} columns={table_columns}>
        </Table>
    );
}