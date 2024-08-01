import type { FormProps } from 'antd';
import { Button, Radio, Select, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { departments } from '../../global/departments';
import { Create_Faculty_Type, Create_Student_Type } from '../../interfaces/signup.interface';
import { useCreateUserMutation } from '../../redux/api/authApi';
import { Decode_JWT_Token } from '../../utils/decodeJwt';
import { useAppDispatch } from '../../redux/hooks';
import { User_Type, setUser } from '../../redux/features/authSlice';
import { toast } from 'sonner';


const SignupPage = () => {
  const [createUserFnc, { error }] = useCreateUserMutation()
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(error);

  type FieldType = {
    email: string;
    password: string;
    role: string,
    select: string,
    f_name: string,
    m_name?: string,
    l_name: string,
    id: string
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const toastId = toast.loading('Loading....', { position: 'top-center' });
    try {
      if (values.role === 'STUDENT') {
        // for student
        const newStudent: Create_Student_Type = {
          user: {
            email: values.email,
            role: values.role,
            password: values.password,
          },
          name: {
            f_name: values.f_name,
            m_name: values.m_name,
            l_name: values.l_name
          },
          studentId: values.id,
          department: values.select
        }
        // pass data to create user route
        const data = await createUserFnc(newStudent).unwrap();
        if (data.success) {
          toast.success("Successfully Create Account !", { id: toastId, position: 'top-center' });
          // decode token by access token 
          const user = Decode_JWT_Token(data?.data?.AccessToken) as User_Type;
          // set user to redux state
          dispatch(setUser({ user, token: data.data.AccessToken, _id: data.data.student[0].user, me: null }));
          // affter successfully login , navigate to profile route
          navigate('/profile');
        }
      } else {
        // for faculty
        const newFaculty: Create_Faculty_Type = {
          user: {
            email: values.email,
            role: values.role,
            password: values.password,
          },
          name: {
            f_name: values.f_name,
            m_name: values.m_name,
            l_name: values.l_name
          },
          teacherId: values.id,
          department: values.select
        }
        // pass data to create user route
        const data = await createUserFnc(newFaculty).unwrap();
        console.log(data);
        if (data.success) {
          toast.success("Successfully Create Account !", { id: toastId, position: 'top-center' });
          // decode token by access token 
          const user = Decode_JWT_Token(data?.data?.AccessToken) as User_Type;
          // set user to redux state
          dispatch(setUser({ user, token: data.data.AccessToken, _id: data.data.teacher[0].user, me: null }));
          // affter successfully login , navigate to profile route
          navigate('/profile');
        }
      }
    } catch (err: any) {
      toast.error(err.message, { id: toastId, position: 'top-center' });
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log(errorInfo);
  };



  return (
    <div style={{ backgroundColor: '#F4EEE2', height: '100vh', display: 'grid', overflowY: 'scroll' }}>
      <div style={{ backgroundColor: '#F4EEE2', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ maxWidth: '70px', margin: '2rem 0rem .5rem 0rem', opacity: '0.5' }} src="https://i.ibb.co/B2M3Xc0/logo.png" alt="" />
        <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
        <small style={{ fontFamily: 'var(--Playwrite)', marginBottom: '2rem', marginTop: '-.8rem' }}>Easy, Perfect & Instant Note</small>
        <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>SIGNUP</h2>

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


          {/* ------------------- role field ------------------- */}
          <small>Select Role</small>
          <Form.Item label="Radio"
            name="role"
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
            <Select style={{ background: 'transparent', outline: 'none', border: 'none' }} placeholder="Select Department">
              {departments.map((one) => <Select.Option key={one} value={one}>{one}</Select.Option>)}
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem', backgroundColor: '' }}>
              SIGNUP NOW
            </Button>
          </Form.Item>
          <p style={{ textAlign: 'center', marginTop: '-1rem' }}>Already have an account? <Link to={'/login'}>Go Login</Link></p>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Password not remember? <Link to={'/forget'}>Forget Passoword</Link></p>
        </Form>
      </div>
    </div>
  )
}

export default SignupPage