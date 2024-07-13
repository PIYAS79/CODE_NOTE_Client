import { ExclamationCircleOutlined, GithubOutlined, HomeOutlined, JavaOutlined, JavaScriptOutlined, LinkOutlined, NodeExpandOutlined, NodeIndexOutlined, PythonOutlined, ReconciliationOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Layout, Image, Button } from 'antd';
import Web_Header from './Web_Header';
import ContentSection from './ContentSection';
import { NavLink, Outlet } from 'react-router-dom';

const { Sider } = Layout;


const Profile_Layout = () => {



    return (
        <div style={{ height: '100vh' }}>
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
                        const layoutContainer = document.querySelector('.fullRight');
                        if (!collapsed) {
                            console.log(collapsed, "FIREEEEEE TRUE");
                            layoutContainer.style.display = 'none';
                        } else {
                            layoutContainer.style.display = 'flex';
                        }
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
                        <div>
                            <p style={{ paddingLeft: '2em', color: '#474740', fontFamily: 'var(--Wittgenstein)', fontSize: '16px', fontWeight: '700' }}>222-15-6479</p>
                            <p style={{ paddingLeft: '2em', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>S M Piyas Mahamude Alif</p>
                        </div>
                        <div style={{ marginTop: '1.5rem', paddingLeft: '2em' }}>
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Semester : <span style={{ fontWeight: '200' }}>5</span></p>
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Department : <span style={{ fontWeight: '200' }}>CSE</span></p>
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Total Code : <span style={{ fontWeight: '200' }}>39</span></p>
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Archive Code : <span style={{ fontWeight: '200' }}>3</span></p>
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Most Used Language : <span style={{ fontWeight: '200' }}>C++</span></p>
                        </div>

                        <div style={{ marginTop: '1.5rem', padding: '0rem 2rem ' }}>
                            <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Skills</p>
                            <div className='skillWrapperRecent' style={{ fontSize: '1.3rem', gap: '.3rem' }}>

                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/denojs/denojs-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" />
                                <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
                                {/* <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maya/maya-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                            <img style={{ display: 'block' }} width={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" />
           */}

                            </div>
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
                    </div>
                </Sider>
                <div className='fullRight' style={{ width: '100%', height: '100%' }}>
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
                        <Outlet />
                    </Layout>
                </div>
            </Layout>
        </div>
    )
}

export default Profile_Layout