import { ExclamationCircleOutlined, FieldTimeOutlined, GithubOutlined, HomeOutlined, LinkOutlined, PhoneFilled, SendOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Layout, Image, Button } from 'antd';
import Web_Header from './Web_Header';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Skill_Section from '../components/Skill_Section';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { User_Type, removeUser, setMe } from '../redux/features/authSlice';
import { useGetMeQuery, useGetUserCodesQuery } from '../redux/api/timelineApi';
import { My_Profile_Data_Type } from '../interfaces/my.interface';
import find_StarCode_And_MostUsedLang from '../utils/findStarCodeAndMostUsedLang';
import { FaTelegram } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { FaLocationDot } from 'react-icons/fa6';

const { Sider } = Layout;


const Profile_Layout = () => {

    const dispatch = useAppDispatch();
    const { email, role } = useAppSelector(state => state.auth.user) as User_Type;
    const _id = useAppSelector(state => state.auth._id);
    const { data } = useGetMeQuery({ role: role?.toLowerCase(), email });
    dispatch(setMe(data?.result[0]));
    const me = useAppSelector(state => state.auth.me) as My_Profile_Data_Type;
    const myCodes = useGetUserCodesQuery({ uid: _id });
    let codesStatus;
    if (myCodes?.data?.result.length > 0) {
        codesStatus = find_StarCode_And_MostUsedLang(myCodes?.data?.result);
    }

    const handleLogoutUser = () => {
        dispatch(removeUser(undefined));
    }


    return (
        <div style={{ height: '100vh' }}>
            <Layout className='centralLayout' style={{ height: '100vh' }}>
                <Sider
                    className='siderProfile'
                    width={320}
                    style={{ backgroundColor: '#F4EEE2' }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        const layoutContainer = document.querySelector('.fullRight');
                        // if (!collapsed) {
                        //     console.log(collapsed, "FIREEEEEE TRUE");
                        //     layoutContainer!.style.display = 'none';
                        // } else {
                        //     layoutContainer!.style.display = 'flex';
                        // }
                        if (collapsed) {
                            layoutContainer!.style.display = 'flex';
                        }
                    }}

                >
                    <div className="demo-logo-vertical"
                        style={{ display: 'flex', padding: '3.5rem 0rem 2rem 0rem', justifyContent: 'center' }} >
                        <div className="image-container" style={{ position: 'relative', width: '250px', height: '250px' }}>
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
                            <img
                                className="small-float-image"
                                src="https://i.ibb.co/kxnDwdf/daffodil-international-university-logo-11-C0-D0-D39-A-seeklogo-com.png"
                                alt="Float"
                                style={{
                                    width: '50px',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    bottom: '.8rem',
                                    right: '.5rem',
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            {
                                me?.user?.role === 'STUDENT' ?
                                    <div style={{ paddingLeft: '2rem' }}>
                                        <span style={{ backgroundColor: '#e2751b', color: 'white', padding: '.1rem .5rem', borderRadius: '.5rem' }}>student</span>
                                        <p style={{ marginTop: '.5rem', color: '#474740', fontFamily: 'var(--Wittgenstein)', fontSize: '16px', fontWeight: '700' }}>{me?.studentId}</p>
                                    </div>
                                    :
                                    <div style={{ paddingLeft: '2rem' }}>
                                        <span style={{ backgroundColor: '#782000', color: 'white', padding: '.1rem .5rem', borderRadius: '.5rem' }}>faculty</span>
                                        <p style={{ marginTop: '.5rem', color: '#474740', fontFamily: 'var(--Wittgenstein)', fontSize: '16px', fontWeight: '700' }}>{me?.teacherId}</p>
                                    </div>
                            }
                            <p style={{ paddingLeft: '2em', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>{me?.fullName}</p>
                        </div>
                        <div style={{ marginTop: '1rem', paddingLeft: '2em' }}>
                            {/* <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Semester : <span style={{ fontWeight: '200' }}>5</span></p> */}
                            {me?.department && <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Department : <span style={{ fontWeight: '200' }}>{me?.department}</span></p>}
                            {myCodes?.data?.meta?.total && <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Total Code : <span style={{ fontWeight: '200' }}>{myCodes?.data?.meta?.total}</span></p>}
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Star Code : <span style={{ fontWeight: '200' }}> {codesStatus?.totalStarred || 0}</span></p>
                            {codesStatus?.mostUsedLanguage && <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Most Used Lang : <span style={{ fontWeight: '200' }}>{codesStatus?.mostUsedLanguage}</span></p>}
                        </div>

                        <div style={{ marginTop: '1rem', padding: '0rem 2rem ' }}>
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Skills</p>
                             <Skill_Section />
                            
                        </div>

                        <div style={{ marginTop: '1rem', lineHeight: '3px', fontWeight: '300', paddingLeft: '2em', color: '#474740', fontFamily: 'var(--Wittgenstein)', }}>
                            {me?.contact?.studentProtal && <a href={me?.contact?.studentProtal} target='_blank' style={{ display: 'block', color: '#474740', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}><LinkOutlined style={{ color: '#004AAD', marginRight: '5px' }} /> Student Portal </a>}
                            {me?.contact?.github && <a href={me?.contact?.github} target='_blank' style={{ display: 'block', color: '#474740', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}><GithubOutlined style={{ color: 'gray', marginRight: '5px' }} /> GitHub </a>}
                            {me?.contact?.stackOverflow && <a href={me?.contact?.stackOverflow} target='_blank' style={{ color: '#474740', fontFamily: 'var(--Wittgenstein)', fontSize: '16px', display: 'flex', alignItems: 'center', }}>
                                <img style={{ width: '22px', marginLeft: '-4px', marginRight: '5px' }} src="https://i.ibb.co/5KjDTkn/32px-Stack-Overflow-icon-svg.png" />Stack Overflow</a>}

                            {me?.contact?.telegram && <a href={me?.contact?.telegram} target='_blank' style={{ display: 'block', color: '#474740', fontSize: '16px' }}><FaTelegram style={{ color: 'gray', marginRight: '5px' }} /> Telegram </a>}
                            {me?.contact?.codeForces && <a href={me?.contact?.github} target='_blank' style={{ display: 'block', color: '#474740', fontSize: '16px' }}><SiCodeforces style={{ color: 'gray', marginRight: '5px' }} /> CodeForces </a>}
                            {me?.contact?.address && <a href={me?.contact?.address} target='_blank' style={{ display: 'block', color: '#474740', fontSize: '16px' }}><FaLocationDot style={{ color: 'gray', marginRight: '5px' }} /> {me?.contact?.address} </a>}
                            {me?.contact?.phone && <a href={me?.contact?.phone} target='_blank' style={{ display: 'block', color: '#474740', fontSize: '16px' }}><PhoneFilled style={{ color: 'gray', marginRight: '5px' }} /> {me?.contact?.phone} </a>}
                        </div>
                        <div style={{ marginTop: '1.5rem', margin: '1.5rem 2rem' }}>
                            <Link to={'/setting'}>
                                <Button className='web-button' type="primary" style={{ border: 'none', width: '100%', padding: '0rem 3rem' }}>
                                    Edit Profile
                                </Button>
                            </Link>
                            <Link to={'/security'}>
                                <Button className='web-button-reverse' type="primary" style={{ marginTop: '.5rem',border: 'none', width: '100%', padding: '0rem 3rem' }}>
                                    Edit Security
                                </Button>
                            </Link>
                            <Button onClick={handleLogoutUser} className='web-button-logout' type="primary" style={{ marginTop: '.5rem', border: 'none', width: '100%', padding: '0rem 3rem' }}>
                                LOGOUT
                            </Button>
                        </div>
                    </div>
                </Sider>
                <div className='fullRight' style={{ width: '100%', height: '100%' }}>
                    <Layout>
                        <Web_Header />
                        <div className='navLinks-h'>
                            <NavLink to={'/profile'}><p style={{ color: 'gray', fontSize: '.8rem' }}><HomeOutlined /> Home</p></NavLink>
                            <NavLink to={'/timeline'}><p style={{ color: 'gray', fontSize: '.8rem' }}><FieldTimeOutlined /> Timeline</p></NavLink>
                            <NavLink to={'/setting'}><p style={{ color: 'gray', fontSize: '.8rem' }}><SettingOutlined /> Setting</p></NavLink>
                            <NavLink to={'/star'}><p style={{ color: 'gray', fontSize: '.8rem' }}><StarOutlined /> Star</p></NavLink>
                            <NavLink to={'/about'}><p style={{ color: 'gray', fontSize: '.8rem' }}><ExclamationCircleOutlined /> About</p></NavLink>
                        </div>
                        <Outlet />
                    </Layout>
                </div>
            </Layout>
        </div>
    )
}

export default Profile_Layout