import React, { useEffect, useState } from "react";
import { Button, Card, Image, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { AxiosResponse } from "axios";
import { Route } from "../../enums/Route";

//• allow its users to have a profile and upload their personal information to it
export const Profile = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(23);
  const [email, setEmail] = useState("johny99@yahoo.com");
  const [picture, setPicture] = useState(
    "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const userId = Number(localStorage.getItem("userId"));
      UserService.getInfo(userId)
        .then(({ data: { name, age, email, picture } }: AxiosResponse<any>) => {
          setName(name);
          setAge(age);
          setEmail(email);
          setPicture(picture);
          navigate(Route.Home);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card
        title={"Personal info: "}
        hoverable
        style={{ width: 250, height: 600 }}
        cover={<Image width={250} src={picture} />}
      >
        <Paragraph editable={{ onChange: setName }}>Name: {name}</Paragraph>
        <hr />
        <p>
          <br />
          <Paragraph editable={{ onChange: setAge.toString }}>
            Age: {age}
          </Paragraph>
        </p>
        <Paragraph editable={{ onChange: setEmail }}>Email: {email}</Paragraph>

        <Upload.Dragger
          multiple={false}
          action={"http://localhost:3000/dashboard"}
          listType={"picture"}
        >
          <Button style={{ width: 200 }} icon={<UploadOutlined />}>
            Click to Upload
          </Button>
        </Upload.Dragger>
      </Card>
    </div>
  );
};
