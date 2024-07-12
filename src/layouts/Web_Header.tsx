import { Header } from 'antd/es/layout/layout'

const Web_Header = () => {
    return (
        <Header className='wrapperHeader' style={{ padding: '0rem 1rem',backgroundColor: '#F4EEE2' }}>
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
                <p>home</p>
                <p>home</p>
                <p>home</p>
                <p>home</p>
                <p>home</p>
            </div>

        </Header>
    )
}

export default Web_Header