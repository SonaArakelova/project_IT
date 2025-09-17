'use client';

import React, { useEffect, useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import '@ant-design/v5-patch-for-react-19';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string; 
};


const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


export function LoginForm() {

  const [mounted, setMounted] = useState(false);

  useEffect(() =>{
    setMounted(true);
    }, []);

    if(!mounted){
      return(
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

      )
    }
  

  return (
    <Form<FieldType>
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{
        background:'white',
        alignItems: 'center',
        maxWidth: 600,
        marginTop: '40px',
        paddingTop: '50px',
        paddingRight: '70px',
        paddingBottom: '20px',
        borderRadius: '10px'
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>


   <Form.Item<FieldType> 
        name="remember" 
        valuePropName="checked" 
        label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button 
        type="primary" 
        htmlType="submit" block
        style={{
          backgroundColor: '#064e3b'
        }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
