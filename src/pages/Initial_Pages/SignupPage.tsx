
import type { FormProps } from 'antd';
import { Button, Radio, Select, Form, Input } from 'antd';



const SignupPage = () => {


  type FieldType = {
    email?: string;
    password?: string;
    radio?: string,
    select?:string
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div style={{ backgroundColor: '#F4EEE2', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <img style={{ maxWidth: '70px', marginBottom: '1rem', opacity: '0.5' }} src="https://i.ibb.co/B2M3Xc0/logo.png" alt="" />
      <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
      <small style={{ fontFamily: 'var(--Playwrite)', marginBottom: '3rem' }}>Easy, Perfect & Instant Note</small>
      <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>SIGNUP</h2>



      {/* 
{
    "user": {
        "email": "teacher01@gmail.com",
        "role": "TEACHER",
        "password": "222",
    },
    "name": {
        "f_name": "Piyas",
        "m_name": "Mahamude",
        "l_name": "Alif"
    },
    "teacherId": "tid-01",
    "department":"CSE"
}


*/}


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
        {/* ------------------- email field ------------------- */}
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='email@gmail.com' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
        </Form.Item>
        {/* ------------------- password field ------------------- */}
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='password' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
        </Form.Item>


        {/* ------------------- role field ------------------- */}
        <small>Select Role</small>
        <Form.Item label="Radio"
          name="radio"
          rules={[{ required: true, message: 'Please input your role!' }]}
        >
          <Radio.Group>
            <Radio value="STUDENT"> Student </Radio>
            <Radio value="TEACHER"> Teacher </Radio>
          </Radio.Group>
        </Form.Item>

        {/* ------------------- department field (always at the end) ------------------- */}
        <Form.Item label="Select"
          name="select"
          rules={[{ required: true, message: 'Please input your department!' }]}
        >
          <Select style={{background:'transparent',outline:'none',border:'none'}} placeholder="Select Department">
            <Select.Option value="demo1">Demo</Select.Option>
            <Select.Option value="demo2">Demo</Select.Option>
            <Select.Option value="demo3">Demo</Select.Option>
            <Select.Option value="demo4">Demo</Select.Option>
          </Select>
        </Form.Item>






        <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem', backgroundColor: '' }}>
            SIGNUP NOW
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignupPage