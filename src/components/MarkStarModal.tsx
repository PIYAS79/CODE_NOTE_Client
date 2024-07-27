import { useState } from 'react';
import { Button, Modal, message } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { Single_Code_Type } from '../interfaces/singleCode.interface';
import { detectLanguage } from '../utils/detectLanguage';
import { useUpdateCodeMutation } from '../redux/api/codeApi';

const UpdateCodeModal = ({ codeData }: { codeData: Single_Code_Type }) => {
    const [title, setTitle] = useState(codeData?.title);
    const [courseCode, setCourseCode] = useState(codeData?.courseCode);
    const [code, setCode] = useState(codeData?.code);

    const [updateCodeFnc] = useUpdateCodeMutation();


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        setIsModalOpen(false);
        const detectLang = detectLanguage(code);
        console.log({detectLang});
        const data = await updateCodeFnc({
            data: {
                title, courseCode, code, language: detectLang
            }, cid: codeData?._id
        })
        if (data.data.success) {
            message.success(data.data.message);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <Button onClick={showModal}>
                <EditOutlined />
            </Button>
            <Modal title="UPDATE Code Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input onChange={e => setTitle(e.target.value)} value={title} className='inputModal' type="text" placeholder='title' />
                <input onChange={e => setCourseCode(e.target.value)} value={courseCode} className='inputModal' type="text" placeholder='coursecode' />
                <textarea onChange={e => setCode(e.target.value)} value={code} className='inputModal' id="" cols={30} rows={12} placeholder='code'></textarea>
            </Modal>
        </>
    )
}

export default UpdateCodeModal