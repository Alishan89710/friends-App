import { useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom";
//import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,storage} from './firebase/firebaseLite';



const Signup = () => {
    
    let navigate = useNavigate();
    const onFinish = (values) => {
        auth.createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
   
    // const [user, setUser] = useState({
    //     name: "",
    //     gender: "",
    //     email: "",
    //     password: "",

    // });

    // let name, value;
    // const getDataUser = (event) => {
    //     name = event.target.name;
    //     setUser({ ...user, [name]: value })
    //     value = event.target.value;

    // }
    // const postDataFun = async (e) => {
    //     const { name, gender, email, password } = user;
    //     e.preventDefault()
    //     const response = await fetch("https://friendship-app0-4629f-default-rtdb.firebaseio.com/friendship.json ", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"

    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             gender: gender,
    //             email: email,
    //             password: password
    //         })

    //     })

    // }

    // const onFinish = (values: any) => {
    //     console.log('Success:', values);
    // };

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (

        <div className="form_container"  >

            <Form
                method="POST"
                className="form"
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 10 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Full Name"
                    name="Full Name"
                    onChange={getDataUser}

                    rules={[{ required: true, message: 'Please input your Full Name!' }]}
                    required
                >
                    <Input value={user.name} />
                </Form.Item>

                <Form.Item
                    label="Gender"
                    name="Gender"
                    onChange={getDataUser}

                    rules={[{ required: true, message: 'Please input your Gender!' }]}
                >
                    <Input value={user.gender} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="Email"
                    value={user.email}

                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input value={user.email} />
                </Form.Item>
                <Form.Item
                    label="Password"

                    onChange={getDataUser}
                    name="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password value={user.password} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 6 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
                    <Button className="button" type="primary" htmlType="Login" onFinish={postDataFun} >
                        Create Account
                    </Button>
                </Form.Item>
                <div className="link-2"><Link to="/login">Already registered</Link></div>
            </Form>


        </div>
    )
};

export default Signup;