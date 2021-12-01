import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { Link } from "react-router-dom";
const Signup = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [posts, setPosts] = useState([]);
    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json();
        setPosts(json);
      
    });
    const data = posts.map(post => {
        return (<div>
            Title: {post.title}, Body: {post.body}
        </div>)
    })
   
   
    return (
    
    <div className="form_container"  >
       <Form
            name="basic"
            labelCol={{ span: 10  }}
            wrapperCol={{ span: 10 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Full Name"
                name="Full Name"
                rules={[{ required: true, message: 'Please input your Full Name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Select">
        <Select>
        <Select.Option value="Male">Male</Select.Option>
        <Select.Option value="Female">Female</Select.Option>
        <Select.Option value="Other">Other</Select.Option>
        </Select>
      </Form.Item>
            <Form.Item
                label="Email"
                name="Email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 6 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
                <Button type="primary" htmlType="Login">
                    Create Account
                </Button>
            </Form.Item>
        </Form>

        
    </div>
    )
};

export default Signup;