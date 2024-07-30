
const StackPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
            <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
            <small style={{ fontFamily: 'var(--Playwrite)', margin: '-.4rem 0rem .5rem 0rem' }}>Easy, Perfect & Instant Note</small>
            <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Your_STACK_Status</h2>



            {/* main content start from here  */}
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                <div style={{background:'red',width:'100%',padding:'1rem'}}>left</div>
                <div style={{background:'green',width:'100%',padding:'1rem'}}>right</div>
            </div>

        </div>
    )
}

export default StackPage