import { Button, Image } from "antd"


const AuthorDetails = () => {
    return (
        <>
            <Image
                width={80}
                height={80}
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
                src="https://i.ibb.co/ZcPTCkG/Screenshot-2023-12-02-225247.png"
            />
            <p style={{marginTop:'1rem',fontWeight:'600',fontFamily: 'var(--Wittgenstein)'}}>Student</p>
            <p style={{fontWeight:'600'}}>S M Piyas Mahamude Alif</p>
            <p style={{fontWeight:'600'}}>Since : 2024</p>
            <Button className="web-button" style={{marginTop:'1rem',border:'none',color:'white'}}>Send Code Request</Button>
        </>
    )
}

export default AuthorDetails