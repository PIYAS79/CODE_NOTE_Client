import Card from './Card'

const User_Codes = () => {
    return (
        <>
        <p style={{ color: '#474740', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'var(--Wittgenstein)', marginBottom: '5px' }}>User Codes</p>
        <div className="cardWrapperRecent">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}

export default User_Codes