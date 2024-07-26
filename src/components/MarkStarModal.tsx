import { useState } from 'react';
import { Button, Modal } from "antd";
import { EditOutlined } from '@ant-design/icons';

const MarkStarModal = () => {
    const [title, setTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [code, setCode] = useState('');


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        console.log({code,courseCode,title});
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <Button onClick={showModal}>
                <EditOutlined />
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/* <input onChange={e => setTitle(e.target.value)} value={title} className='inputModal' type="text" placeholder='title' />
                <input onChange={e => setCourseCode(e.target.value)} value={courseCode} className='inputModal' type="text" placeholder='coursecode' />
                <textarea onChange={e => setCode(e.target.value)} value={code} className='inputModal' id="" cols={30} rows={12} placeholder='code'></textarea> */}
                {/* author */}
                {/* isStar */}
                <p>NOW TIME TO UPDATE</p>
            </Modal>
        </>
    )
}

export default MarkStarModal