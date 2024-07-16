import { useState } from 'react';
import { Button, Modal } from "antd"
import { useAppSelector } from '../redux/hooks';
import { detectLanguage } from '../utils/detectLanguage';
import { useCreateCodeMutation } from '../redux/api/codeApi';
import { toast } from 'sonner'



const NewCode = () => {

    const [createCodeFnc] = useCreateCodeMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [code, setCode] = useState('');
    const author = useAppSelector(state => state.auth._id);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        const codeLang = detectLanguage(code);
        const newCode = { title, courseCode, code, author, isStar: false, language: codeLang }
        const toastId = toast.loading("Loading...", { position: 'top-center' });
        try {
            const data = await createCodeFnc(newCode).unwrap();
            if (data.success) {
                setIsModalOpen(false);
                toast.success(data.message, { duration: 2000, position: 'top-center', id: toastId });
            }
        } catch (err: any) {
            toast.error(err.message, { id: toastId, position: 'top-center' });
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <Button style={{ border: 'none', color: 'white', position: 'sticky', top: '5rem' }} className="web-button" onClick={showModal}>+ Add New Code</Button>
            <Modal title="Create New Code" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <input onChange={e => setTitle(e.target.value)} value={title} className='inputModal' type="text" placeholder='title' />
                <input onChange={e => setCourseCode(e.target.value)} value={courseCode} className='inputModal' type="text" placeholder='coursecode' />
                <textarea onChange={e => setCode(e.target.value)} value={code} className='inputModal' id="" cols={30} rows={12} placeholder='code'></textarea>
                {/* author */}
                {/* isStar */}
            </Modal>
        </>
    )
}

export default NewCode