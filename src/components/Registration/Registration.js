import React from "react";
import { Select, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";

const { Option } = Select;

const Registration = () => {
  const onFinish = (values) => {
    console.log("Values:", values);
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="log-in-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Tell us who you are !" allowClear>
            <Option value="individual ">Individual </Option>
            <Option value="Organization">Organization</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input allowClear placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Please input your Password!",
            },
          ]}
        >
          <Input type="email" placeholder="E-Mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item
          // label="Confirm Password"
          name="confirm-Password"
          rules={[
            {
              required: true,
              message: "Please confirm your Password!",
            },
          ]}
        >
          <Input type="password" placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={navigateHome}
          >
            Create account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Registration;
