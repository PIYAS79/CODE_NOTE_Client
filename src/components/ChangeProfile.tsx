import type { FormProps } from 'antd';
import { UploadOutlined } from "@ant-design/icons"
import { Button, Form, Input, Upload } from "antd"


const ChangeProfile = () => {


    const [form] = Form.useForm();
    type FieldType = {
        upload?:string
    };
    const onFinish: FormProps<FieldType>['onFinish'] = (value) => {
        console.log(value);
    };
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                </div>





                <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button className='web-button' type="primary" htmlType="submit" style={{ border: 'none', padding: '0rem 3rem',marginTop:'1rem', backgroundColor: '' }}>
                        CHANGE PROFILE
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ChangeProfile