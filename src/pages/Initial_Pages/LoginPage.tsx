
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';



const LoginPage = () => {


  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div style={{ backgroundColor: '#F4EEE2', height: '100vh', width: '100%',overflow:'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <img style={{ maxWidth: '70px', marginBottom: '1rem', opacity: '0.5' }} src="https://i.ibb.co/B2M3Xc0/logo.png" alt="" />
      <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
      <small style={{ fontFamily: 'var(--Playwrite)', marginBottom: '3rem' }}>Easy, Perfect & Instant Note</small>
      <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>LOGIN</h2>





      <Form
        name="basic"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 100 }}
        style={{ maxWidth: 400, minWidth: 300 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          // label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='email@gmail.com' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='password' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem', backgroundColor: '' }}>
            LOGIN NOW
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginPage