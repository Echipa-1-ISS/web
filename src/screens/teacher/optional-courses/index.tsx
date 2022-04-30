import { Button } from "antd";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AddOptionalCourseModal } from "./AddOptionalCourseModal";

import "./main.css";

export const OptionalCourses = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="courses-contaner">
      <h2 id="page-title">Your optional courses</h2>
      <Button
        type="primary"
        className="add-button"
        size="large"
        icon={<IoMdAddCircleOutline size={24} />}
        onClick={() => setOpen(true)}
      >
        Add optional course
      </Button>
      <div id="courses-list">
        <div className="list-item"></div>
        <div className="list-item"></div>
      </div>
      <AddOptionalCourseModal
        visible={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
};
