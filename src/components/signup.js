import { useState } from "react";
import { Form, Input, Button, Checkbox} from 'antd';
import { Link } from "react-router-dom";
const Signup = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [user, setUser] = useState({
        name: "",
        gender: "",
        email: "",
        password: "",

    });
    
    let name, value;
    const getDataUser = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    }
    const postDataFun = async (e) => {
        const {name,gender,email,password} = user ;
        e.preventDefault()
        const response = await fetch("https://friendship-app-4629f-default-rtdb.firebaseio.com/friendship.json ",  {
            method: "POST",
                headers : {
                "Content-Type": "application/json"

            },
        body : JSON.stringify({
            name : name ,
            gender: gender,
            email: email,
            password: password
        })
        
        })
       
    }
    // const [posts, setPosts] = useState([]);
    // useEffect(async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const json = await response.json();
    //     setPosts(json);

    // });
    // const data = posts.map(post => {
    //     return (<div>
    //         Title: {post.title}, Body: {post.body}
    //     </div>)
    // })


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
                        value={user.name}
                        rules={[{ required: true, message: 'Please input your Full Name!' }]}
                        required
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        name="Gender"
                        onChange={getDataUser}
                        value={user.gender}
                        rules={[{ required: true, message: 'Please input your Gender!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        value={user.email}

                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        value={user.password}
                        onChange={getDataUser}
                        name="Password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 6 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
                        <Button className="button" type="primary" htmlType="Login" onClick={postDataFun} >
                            Create Account
                        </Button>
                    </Form.Item>
                <div className="link-2"><Link to="/login">Already registered</Link></div>
                </Form>


                   </div>
    )
};

export default Signup;