import React from "react";
import { Select, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";

const Registration = () => {
  const onFinish = (values) => {
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
            <Select.Option value="individual">Individual </Select.Option>
            <Select.Option value="Organization">Organization</Select.Option>
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
          name="interests"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select Interests" mode="multiple" allowClear>
            <Select.Option value="Culture">Culture </Select.Option>
            <Select.Option value="Human Rights">Human Rights</Select.Option>
            <Select.Option value="Agriculture">Agriculture </Select.Option>
            <Select.Option value="Children and Youth">
              Children and Youth
            </Select.Option>
            <Select.Option value="Community Development">
              Community Development{" "}
            </Select.Option>
            <Select.Option value="Education">Education</Select.Option>
            <Select.Option value="Environment">Environment </Select.Option>
            <Select.Option value="Health">Health</Select.Option>
            <Select.Option value="Wildlife Protection">
              Wildlife Protection{" "}
            </Select.Option>
            <Select.Option value="Women’s Empowerment">
              Women’s Empowerment
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="email"
          allowClear
          rules={[
            {
              type: "email",
              message: "Please input your Password!",
            },
          ]}
        >
          <Input type="email" allowClear placeholder="E-Mail" />
        </Form.Item>
        <Form.Item
          name="password"
          allowClear
          rules={[
            {
              // required: true,
              // message: "Please input your Password!",
            },
          ]}
        >
          <Input
            type="password"
            allowClear
            defaultValue={""}
            placeholder="Password"
          />
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
