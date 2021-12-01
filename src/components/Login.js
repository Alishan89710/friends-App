import "../App.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
const Login = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: "GET"
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(json => setData(json));
    }, []);

    return ( 
    <div className="container"  >


        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 13 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
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

            <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
                <Button type="primary" htmlType="Login">
                    Login
                </Button>
            </Form.Item>
        </Form>











        <div className="link"><Link to="/signup">Signup</Link></div>


        {/* <div><Link to="/invoices/123">My Invoice</Link></div> */}
    </div>)
};

export default Login;