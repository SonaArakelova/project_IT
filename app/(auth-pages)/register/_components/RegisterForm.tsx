
'use client';

import React, { useState, useEffect } from 'react';
import type { FormItemProps, FormProps } from 'antd';
import {Button, Form, Input, Select, Spin, message,} from 'antd';
import '@ant-design/v5-patch-for-react-19';

const { Option } = Select;

type FormValues = {
  email: string;
  password1: string;
  password2: string;
  nickname: string;
  gender: 'male' | 'female';
};

const formItemLayout: FormProps = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout: FormItemProps = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export function RegisterForm() {
  const [form] = Form.useForm<FormValues>();
  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const onFinish = (values: FormValues) => {
    console.log('Received values of form:', values);
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);

      if (values.email === 'test@example.com') {
        message.error('This email is already registered.');
      } else {
        message.success('Registration successful!');
        form.resetFields();
      }
    }, 1500);
  };

  return (
    <Form<FormValues>
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ gender: 'other' }}
      style={{
        background: 'white',
        alignItems: 'center',
        maxWidth: 800,
        marginTop: '40px',
        paddingTop: '50px',
        paddingRight: '70px',
        paddingBottom: '20px',
        borderRadius: '10px',
        paddingLeft:'10px'
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' },
        ]}
      >
        <Input disabled={submitting} />
      </Form.Item>

      <Form.Item
        name="password1"
        label="Password"
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 6, message: 'Password must be at least 6 characters.' },
        ]}
        hasFeedback
      >
        <Input.Password disabled={submitting} />
      </Form.Item>

      <Form.Item
        name="password2"
        label="Confirm Password"
        dependencies={['password1']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password1') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input disabled={submitting} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="Select your gender" disabled={submitting}>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          loading={submitting}
          style={{ backgroundColor: '#064e3b' }}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
