import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


const ResetPassPage = () => {

    const [currentUrl, setCurrentUrl] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [])

    type FieldType = {
        newPassword: string;
        email: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = async (values: any) => {
        const url = new URL(currentUrl);
        const params = new URLSearchParams(url.search);
        const email = params.get('email');
        const token = params.get('token');
        values.email = email as string;
        const toastId = toast.loading("Analysing your request...", { position: 'top-center' });
        try {
            const res: any = await fetch('https://code-note-backend.vercel.app/api/v1/auth/reset', {
                method: 'PATCH',
                // credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `${token}`,
                },
                body: JSON.stringify(values)
            })
            const data = await res.json();
            if (data?.success) {
                toast.success(data?.message, { position: 'top-center', id: toastId });
                // navigate to login page
                navigate('/login')
            } else {
                toast.error("Reset Password Chance Timeout", { position: 'top-center', id: toastId });
            }
        } catch (err) {
            toast.error("There is an sever side error !", { position: 'top-center', id: toastId });
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div style={{ backgroundColor: '#F4EEE2', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ maxWidth: '70px', marginBottom: '1rem', opacity: '0.5' }} src="https://i.ibb.co/B2M3Xc0/logo.png" alt="" />
            <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
            <small style={{ fontFamily: 'var(--Playwrite)', marginBottom: '3rem' }}>Easy, Perfect & Instant Note</small>
            <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Reset Password</h2>


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

                {/* new password field */}
                {/* ------------------- password field ------------------- */}
                <Form.Item<FieldType>
                    name="newPassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='new password' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem', backgroundColor: '' }}>
                        FORGET NOW
                    </Button>
                </Form.Item>
                <p style={{ textAlign: 'center', marginTop: '-1rem' }}>Don't have an account? <Link to={'/signup'}>Create Account</Link></p>
                <p style={{ textAlign: 'center' }}>Login with password? <Link to={'/login'}>Go to Login</Link></p>
            </Form>
        </div>
    )
}

export default ResetPassPage