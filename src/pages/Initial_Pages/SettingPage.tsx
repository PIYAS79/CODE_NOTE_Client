import type { FormProps } from 'antd';
import { Button, Radio, Select, Form, Input } from 'antd';



const SettingPage = () => {


  type FieldType = {
    email: string;
    password: string;
    select: string,
    f_name: string,
    m_name?: string,
    l_name: string,
    id: string,
    telegram:string,
    studentPortal:string
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div style={{ backgroundColor: '#F4EEE2', height: '100vh', display: 'grid' }}>
      <div style={{ backgroundColor: '#F4EEE2', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        
        <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
        <small style={{ fontFamily: 'var(--Playwrite)', marginBottom: '2rem' }}>Easy, Perfect & Instant Note</small>
        <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Change Data</h2>



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
          {/* <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='email@gmail.com' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item> */}
          {/* ------------------- password field ------------------- */}
          {/* <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='password' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item> */}
          {/* ------------------- name (f-name) field ------------------- */}
          <Form.Item<FieldType>
            name="f_name"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input placeholder='first name' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- name (m-name) field ------------------- */}
          <Form.Item<FieldType>
            name="m_name"
          >
            <Input placeholder='middle name' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- name (l-name) field ------------------- */}
          <Form.Item<FieldType>
            name="l_name"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input placeholder='last name' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- id field ------------------- */}
          <Form.Item<FieldType>
            name="id"
            rules={[{ required: true, message: 'Please input your id!' }]}
          >
            <Input placeholder='faculty / student id' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- telegram field ------------------- */}
          <Form.Item<FieldType>
            name="telegram"
            rules={[{ required: true, message: 'Please input your telegram link!' }]}
          >
            <Input placeholder='telegram' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- studentPortal field ------------------- */}
          <Form.Item<FieldType>
            name="studentPortal"
            rules={[{ required: true, message: 'Please input your student portal link!' }]}
          >
            <Input placeholder='student portal' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>


          {/* ------------------- department field (always at the end) ------------------- */}
          <Form.Item label="Select"
            name="select"
            rules={[{ required: true, message: 'Please input your department!' }]}
          >
            <Select style={{ background: 'transparent', outline: 'none', border: 'none' }} placeholder="Select Department">
              <Select.Option value="demo1">Demo</Select.Option>
              <Select.Option value="demo2">Demo</Select.Option>
              <Select.Option value="demo3">Demo</Select.Option>
              <Select.Option value="demo4">Demo</Select.Option>
            </Select>
          </Form.Item>






          <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem', backgroundColor: '' }}>
              SUBMIT DATA
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SettingPage