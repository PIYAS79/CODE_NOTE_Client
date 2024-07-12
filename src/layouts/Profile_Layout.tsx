import { ExclamationCircleOutlined, GithubOutlined, HomeOutlined, LinkOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Layout, Image, Button } from 'antd';
import Web_Header from './Web_Header';
import ContentSection from './ContentSection';
import { NavLink, Outlet } from 'react-router-dom';

const { Sider } = Layout;


const Profile_Layout = () => {



    return (
        <div style={{height:'100vh'}}>
            <Layout className='centralLayout' style={{ height: '100vh' }}>
                <Sider
                className='siderProfile'
                    width={300}
                    style={{ backgroundColor: '#F4EEE2' }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical"
                        style={{ display: 'flex', padding: '3.5rem 0rem 2rem 0rem', justifyContent: 'center' }} >
                        <Image
                            className='pos'
                            width={250}
                            height={250}
                            style={{
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                            src="https://i.ibb.co/ZcPTCkG/Screenshot-2023-12-02-225247.png"
                        />
                    </div>
                    <div>
                        <p style={{ paddingLeft: '2em', color: '#474740', fontFamily: 'var(--Wittgenstein)', fontSize: '16px', fontWeight: '700' }}>222-15-6479</p>
                        <p style={{ paddingLeft: '2em', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>S M Piyas Mahamude Alif</p>
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <p style={{ paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Semester : <span style={{ fontWeight: '200' }}>5</span></p>
                        <p style={{ paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Department : <span style={{ fontWeight: '200' }}>CSE</span></p>
                        <p style={{ paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Total Code : <span style={{ fontWeight: '200' }}>39</span></p>
                        <p style={{ paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Archive Code : <span style={{ fontWeight: '200' }}>3</span></p>
                        <p style={{ paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Most Used Language : <span style={{ fontWeight: '200' }}>C++</span></p>
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <a style={{ display: 'block', paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}><LinkOutlined style={{ color: '#004AAD', marginRight: '5px' }} /> Student Portal </a>
                        <a style={{ display: 'block', paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}><GithubOutlined style={{ color: 'gray', marginRight: '5px' }} /> GitHub </a>
                        <a style={{ paddingLeft: '2em', color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px', display: 'flex', alignItems: 'center', }}>
                            <img style={{ width: '22px', marginLeft: '-4px', marginRight: '5px' }} src="https://i.ibb.co/5KjDTkn/32px-Stack-Overflow-icon-svg.png" />Stack Overflow</a>
                    </div>
                    <div style={{ marginTop: '1.5rem', margin: '1.5rem 2rem' }}>
                        <Button className='web-button' type="primary" style={{ border: 'none', width: '100%', padding: '0rem 3rem' }}>
                            Edit Profile
                        </Button>
                        <Button className='web-button-logout' type="primary" style={{ marginTop: '1rem', border: 'none', width: '100%', padding: '0rem 3rem' }}>
                            LOGOUT
                        </Button>
                    </div>
                </Sider>
                <Layout>
                    <Web_Header />
                    {/* 
                    <HomeFilled />
                    <SettingFilled /> 
                    <StarFilled />
                    <ExclamationCircleFilled />
                    */}
                    <div className='navLinks-h'>
                        <NavLink to={'/profile'}><p style={{ fontSize: '.8rem' }}><HomeOutlined /> Home</p></NavLink>
                        <NavLink to={'/setting'}><p style={{ fontSize: '.8rem' }}><SettingOutlined /> Setting</p></NavLink>
                        <NavLink to={'/star'}><p style={{ fontSize: '.8rem' }}><StarOutlined /> Star</p></NavLink>
                        <NavLink to={'/about'}><p style={{ fontSize: '.8rem' }}><ExclamationCircleOutlined /> About</p></NavLink>
                    </div>
                    <Outlet/>
                </Layout>
            </Layout>
        </div>
    )
}

export default Profile_Layout