import React from 'react';
import { Form, Input, Button } from 'antd';
import { gql, useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUpMutation = gql`
  mutation SignUpMutation($email: String!, $password: String!) {
    signUp(input: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`;

const signup = () => {
  const [signUp] = useMutation(SignUpMutation);
  const router = useRouter();
  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      await signUp({
        variables: {
          email: values.username,
          password: values.password,
        },
      });
      router.push('/signin');
    } catch (error) {
      console.log(error);
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
          label='Username'
          name='username'
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

        {/* <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default signup;
