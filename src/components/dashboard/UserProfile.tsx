import React from "react";
import { Card, Image } from "antd";

const { Meta } = Card;

export type ProfileProps = {
  name: string;
  age: number;
  email: string;
  url: string;
};

export const Profile = ({ name, age, email, url }: ProfileProps) => {
  return (
    <div>
      <Card
        title={"Personal info: "}
        hoverable
        style={{ width: 250, height: 400 }}
        cover={<Image width={250} src={url} />}
      >
        <Meta title={name} />
        <hr />
        <p>
          <br />
          Age: {age}
        </p>
        <p>Email: {email}</p>
      </Card>
    </div>
  );
};
