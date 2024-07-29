import type { FormProps } from 'antd';
import { Button, Select, Form, Input, Upload, Cascader } from 'antd';
import { Skill_Option, skill_options } from '../../global/skills_options';
import type { CascaderProps } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { departments } from '../../global/departments';
import { useUpdateUserMutation } from '../../redux/api/timelineApi';
import { toast } from 'sonner';



const SettingPage = () => {
  const [form] = Form.useForm();
  let flattenedArray: [] | string[];
  const { me } = useAppSelector(state => state.auth);
  const [updateUserFnc] = useUpdateUserMutation();

  useEffect(() => {
    form.setFieldsValue({
      f_name: me?.name?.f_name,
      m_name: me?.name?.m_name,
      l_name: me?.name?.l_name,
      id: me?.studentId || me?.teacherId,
      telegram: me?.contact?.telegram,
      studentPortal: me?.contact?.studentProtal,
      address: me?.contact?.address,
      phone: me?.contact?.phone,
      stackoverflow: me?.contact?.stackOverflow,
      github: me?.contact?.github,
      // upload:me?.user.profileImage
      department: me?.department,
      codeForces: me?.contact?.codeForces,
    });
  }, [me]);

  type FieldType = {
    email?: string;
    password?: string;
    semester?: number;
    department?: string,
    f_name?: string,
    m_name?: string,
    l_name?: string,
    id?: string,
    telegram?: string,
    studentPortal?: string,
    address?: string,
    phone?: string,
    stackoverflow?: string,
    github?: string,
    codeForces?: string
  };
  const onChange: CascaderProps<Skill_Option, 'icon', true>['onChange'] = (value) => {
    flattenedArray = value.flat();
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    const udpatedData: any = {
      name: {
        f_name: values.f_name,
        m_name: values.m_name,
        l_name: values.l_name
      },
      department: values.department,
      skills: flattenedArray,
      contact: {
        studentProtal: values.studentPortal,
        telegram: values.telegram,
        github: values.github,
        stackOverflow: values.stackoverflow,
        codeForces: values.codeForces,
        phone: values.phone,
        address: values.address,
      }
    }
    if (me?.user?.role === 'STUDENT') {
      udpatedData.studentId = values.id
    } else {
      udpatedData.teacherId = values.id
    }
    const toastId = toast.loading('Profile Updating...', { position: 'top-center' });
    try {
      await updateUserFnc({ role: (me?.user?.role)?.toLowerCase(), uid: me?._id, data: udpatedData })
      toast.success("Profile is successfully updated !", { id: toastId, position: 'top-center' });
    } catch (err) {
      toast.error("Not updated due to server related error !", { position: 'top-center', id: toastId })
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div style={{ backgroundColor: '#F4EEE2', height: '100vh', display: 'grid' }}>
      <div style={{ backgroundColor: '#F4EEE2', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
        <small style={{ fontFamily: 'var(--Playwrite)', margin: '-.4rem 0rem 1rem 0rem' }}>Easy, Perfect & Instant Note</small>
        <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Change Data</h2>



        <Form
          form={form}
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
          >
            <Input placeholder='last name' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>

          {/* ------------------- profile picture field -------------------
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
              extra="Upload Profile Picture"
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button style={{ backgroundColor: 'transparent' }} icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <img width={80} height={80} style={{ objectFit: 'cover', borderRadius: '.5rem', marginBottom: '.5rem' }} src="https://i.ibb.co/HBtgY1B/fat-thor.webp" alt="" />
          </div> */}
          {/* ------------------- id field ------------------- */}
          <Form.Item<FieldType>
            name="id"
          >
            <Input placeholder='faculty / student id' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- telegram field ------------------- */}
          <Form.Item<FieldType>
            name="telegram"
          >
            <Input placeholder='telegram' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- studentPortal field ------------------- */}
          <Form.Item<FieldType>
            name="studentPortal"
          >
            <Input placeholder='student portal' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- github field ------------------- */}
          <Form.Item<FieldType>
            name="github"
          >
            <Input placeholder='github' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- stackoverflow field ------------------- */}
          <Form.Item<FieldType>
            name="stackoverflow"
          >
            <Input placeholder='stackoverflow' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- phone field ------------------- */}
          <Form.Item<FieldType>
            name="phone"
          >
            <Input placeholder='phone' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- codeForces field ------------------- */}
          <Form.Item<FieldType>
            name="codeForces"
          >
            <Input placeholder='codeForces ' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- address field ------------------- */}
          <Form.Item<FieldType>
            name="address"
          >
            <Input placeholder='address' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
          </Form.Item>
          {/* ------------------- skills field ------------------- */}
          <Cascader
            style={{ width: '100%', marginBottom: '.8rem' }}
            options={skill_options}
            onChange={onChange}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy="SHOW_CHILD"
            placeholder='add skills'
          />
          <small>Ur current skills : </small><br />
          [
          {
            me?.skills.map((one, i) => <small key={i}>{one},</small>)
          }]



          {/* ------------------- department field (always at the end) ------------------- */}
          <Form.Item label="Select"
            name="department"
          >
            <Select style={{ background: 'transparent', outline: 'none', border: 'none' }} placeholder="Select Department">
              {
                departments.map((one, i) => <Select.Option key={i} value={one}>{one}</Select.Option>)
              }
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