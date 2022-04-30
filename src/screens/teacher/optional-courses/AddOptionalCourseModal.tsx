import { Button, Modal, Form, Input, Select, Row, Col } from "antd";
import { useEffect } from "react";
import { AddOptionalCourseFormModel } from "./types";

const requiredField = { required: true, message: "This field is required" };

const semesters = [
  {
    label: "1st semester, 1st year",
    value: 1,
  },
  {
    label: "2nd semester, 1st year",
    value: 2,
  },
  {
    label: "1st semester, 2nd year",
    value: 3,
  },
];

const specializations = [
  {
    label: "Mathematics",
    value: 1,
  },
  {
    label: "Informatics",
    value: 2,
  },
  {
    label: "Design",
    value: 3,
  },
];

interface AddOptionalCourseModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

export const AddOptionalCourseModal = ({
  visible,
  onOk,
  onCancel,
}: AddOptionalCourseModalProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (data: AddOptionalCourseFormModel) => {
    console.log(data);
    onOk();
  };

  useEffect(() => {
    if (!visible) return;

    form.resetFields();
  }, [visible, form]);

  return (
    <Modal
      title="Add new optional course"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        onFinish={handleSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={form}
      >
        <Form.Item label="Course name" name="name" rules={[requiredField]}>
          <Input />
        </Form.Item>
        <Form.Item label="Semester" name="semester" rules={[requiredField]}>
          <Select options={semesters} />
        </Form.Item>
        <Form.Item
          label="Specialization"
          name="specialization"
          rules={[requiredField]}
        >
          <Select options={specializations} />
        </Form.Item>
        <Row>
          <Col span={6} offset={18}>
            <Button id="add-course" type="primary" htmlType="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
