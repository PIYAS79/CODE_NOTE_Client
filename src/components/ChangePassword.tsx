import type { FormProps } from 'antd';
import { Button, Form, Input } from "antd"
import { useChangePasswordMutation } from '../redux/api/authApi';
import { toast } from 'sonner';
import { useAppDispatch } from '../redux/hooks';
import { removeUser } from '../redux/features/authSlice';


const ChangePassword = () => {

    const [changePassFnc] = useChangePasswordMutation();
    const dispatch = useAppDispatch();

    const [form] = Form.useForm();
    type FieldType = {
        currentPass?: string;
        newPass?: string;
    };
    const onFinish: FormProps<FieldType>['onFinish'] = async (value) => {
        const passData = {
            oldPassword: value.currentPass,
            newPassword: value.newPass
        }
        const toastId = toast.loading("Password Changing...", { position: 'top-center' });
        try {
            const data: any = await changePassFnc({ data: passData });
            if (data?.error) {
                toast.error(data?.error?.data?.errorTitle, { position: 'top-center', id: toastId })
            }
            if (data?.data?.success) {
                toast.success(data?.data?.message, { position: 'top-center', id: toastId })
                dispatch(removeUser());
            }
        } catch (err: any) {
            toast.error("There is an server side error !", { position: 'top-center', id: toastId })
        }
    };
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <Form
                form={form}
                name="basicPassChangge"
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
                    name="currentPass"
                    rules={[{ required: true, message: 'Please input your current password!' }]}
                >
                    <Input.Password placeholder='current password' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
                </Form.Item>
                {/* ------------------- password field ------------------- */}
                <Form.Item<FieldType>
                    name="newPass"
                    rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                    <Input.Password placeholder='new password' style={{ border: '1px solid gray', backgroundColor: 'transparent' }} />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem', backgroundColor: '' }}>
                        CHANGE PASSWORD
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ChangePassword