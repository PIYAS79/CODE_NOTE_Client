import ChangePassword from '../../components/ChangePassword';
import ChangeProfile from '../../components/ChangeProfile';


const Security_Page = () => {

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem 0rem' }}>


            <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
            <small style={{ fontFamily: 'var(--Playwrite)', margin: '-.4rem 0rem 1rem 0rem' }}>Easy, Perfect & Instant Note</small>
            <h2 style={{ fontFamily: 'var(--Wittgenstein)', margin: '0rem 0rem 2rem 0rem', color: '#4a4a4a' }}>Change Security Info</h2>

            {/* ------------------- profile picture change field ------------------- */}
            <ChangeProfile />

            {/* ------------------- change password field -------------------- */}
            <h2 style={{ fontFamily: 'var(--Wittgenstein)', margin: '2rem 0rem 1rem 0rem', color: '#4a4a4a' }}>Change Password</h2>
            <ChangePassword />



        </div>
    )
}

export default Security_Page