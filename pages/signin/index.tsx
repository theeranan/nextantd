import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { gql } from '@apollo/client';
import { useMutation, useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
const SignInMutation = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const signin = () => {
  const client = useApolloClient();
  const [signIn] = useMutation(SignInMutation);
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      await client.resetStore();
      const { data } = await signIn({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      if (data.signIn.user) {
        // await router.push('/');
        window.location.href = '/';
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default signin;
