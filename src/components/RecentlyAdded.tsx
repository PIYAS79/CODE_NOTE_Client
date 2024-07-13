import { useState } from 'react';
import { Button, Modal } from "antd"
import Card from "./Card"


const RecentlyAdded = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title,setTitle]=useState('');
  const [courseCode,setCourseCode]=useState('');
  const [language,setLanguage]=useState('');
  const [code,setCode]=useState('')

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log({code,title,language,courseCode,author:'',isStar:false});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5rem' }}>
        <p style={{ color: '#474740', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'var(--Wittgenstein)' }}>Recently Added</p>
        <Button style={{ border: 'none', color: 'white', position: 'sticky', top: '5rem' }} className="web-button" onClick={showModal}>+ Add New Code</Button>
        <Modal title="Create New Code" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
          <input onChange={e=>setTitle(e.target.value)} value={title} className='inputModal' type="text" placeholder='title'/>
          <input onChange={e=>setCourseCode(e.target.value)} value={courseCode} className='inputModal' type="text" placeholder='coursecode'/>
          <input onChange={e=>setLanguage(e.target.value)} value={language} className='inputModal' type="text" placeholder='language'/>
          <textarea onChange={e=>setCode(e.target.value)} value={code} className='inputModal' id="" cols={30} rows={12} placeholder='code'></textarea>
          {/* author */}
          {/* isStar */}
        </Modal>
      </div>
      <div className="cardWrapperRecent">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default RecentlyAdded