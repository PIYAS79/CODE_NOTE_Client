import type { FormProps } from 'antd';
import { UploadOutlined } from "@ant-design/icons"
import { Button, Form, Upload } from "antd"
import { useUploadProfilePictureMutation } from '../redux/api/authApi';
import { toast } from 'sonner';
import { useAppSelector } from '../redux/hooks';


const ChangeProfile = () => {

    const [uploadPPFnc] = useUploadProfilePictureMutation();
    const UserData = useAppSelector(state => state.auth.user);

    const [form] = Form.useForm();
    type FieldType = {
        upload?: any
    };
    const onFinish: FormProps<FieldType>['onFinish'] = async (value) => {
        const toastId = toast.loading('Uploading Profile Picture...', { position: 'top-center' });
        const formData = new FormData();


        try {
            formData.append('file', value.upload[0].originFileObj)
            const data = await uploadPPFnc({ data: formData, email: UserData?.email }).unwrap();
            if (data.success) {
                toast.success(data?.message, { id: toastId, position: 'top-center' });
                value.upload.pop()
                // location.reload();
            }
        } catch (err: any) {
            toast.error(err?.data?.errorTitle || "Please Select Ur Profile Picture !", { id: toastId, position: 'top-center' });
        }
    };
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const normFile = (e: any) => {

        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const beforeUpload = (file: File) => {
        // console.log('File chosen:', file);
        // Prevent automatic upload by returning false
        return false;
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

                {/* ------------------- profile picture field ------------------- */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="Upload Profile Picture"
                    >
                        <Upload name="logo" listType="picture" beforeUpload={beforeUpload}>
                            <Button style={{ backgroundColor: 'transparent' }} icon={<UploadOutlined />}>
                                Click to upload
                            </Button>
                        </Upload>
                    </Form.Item>
                    {/* <img width={80} height={80} style={{ objectFit: 'cover', borderRadius: '.5rem', marginBottom: '.5rem' }} src="https://i.ibb.co/HBtgY1B/fat-thor.webp" alt="" /> */}
                </div>





                <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem', marginTop: '1rem', backgroundColor: '' }}>
                        CHANGE PROFILE
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ChangeProfile