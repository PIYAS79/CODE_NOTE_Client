import { ExclamationCircleOutlined, FieldTimeOutlined, HomeOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'
import { NavLink } from 'react-router-dom'

const Web_Header = () => {
    return (
        <Header className='wrapperHeader' style={{ zIndex:100,padding: '0rem 1rem',backgroundColor: '#F4EEE2',position:'sticky',top:'0' }}>
            {/* logos */}
            <div className='logoDiv'>
                <img style={{ maxWidth: '50px', opacity: '0.5' }} src="https://i.ibb.co/B2M3Xc0/logo.png" alt="" />
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h1 style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE_NOTE</h1>
                    <p style={{ fontFamily: 'var(--Playwrite)',fontSize:'10px',marginTop:'-2.8rem'}}>Easy, Perfect & Instant Note</p>
                </div>
            </div>
            {/* menus */}
            <div className='navLinks'>
                <NavLink to={'/profile'}><p style={{color:'gray',fontSize:'1rem'}}><HomeOutlined/> Home</p></NavLink>
                <NavLink to={'/timeline'}><p style={{color:'gray', fontSize: '1rem' }}><FieldTimeOutlined/> Timeline</p></NavLink>
                <NavLink to={'/setting'}><p style={{color:'gray',fontSize:'1rem'}}><SettingOutlined/> Setting</p></NavLink>
                <NavLink to={'/star'}><p style={{color:'gray',fontSize:'1rem'}}><StarOutlined/> Star</p></NavLink>
                <NavLink to={'/about'}><p style={{color:'gray',fontSize:'1rem'}}><ExclamationCircleOutlined /> About</p></NavLink>
            </div>
        </Header>
    )
}

export default Web_Header