import { Button, Image } from "antd"
import User_Codes from "../../components/User_Codes"
import { InboxOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"


const Profile_View_Page = () => {
  return (
    <div className="codeWrapper" >
      <div className="codeLeft">
        <User_Codes />
      </div>
      <div className="codeRight">
        <Image
          width={80}
          height={80}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          src="https://i.ibb.co/ZcPTCkG/Screenshot-2023-12-02-225247.png"
        />
        <p style={{ marginTop: '1rem', fontWeight: '600', fontFamily: 'var(--Wittgenstein)' }}>Student</p>
        <p style={{ fontWeight: '600' }}>S M Piyas Mahamude Alif</p>
        <p style={{ fontWeight: '600' }}>Since : 2024</p>
        <Link to={'/timeline/email'}>
          <Button className="web-button" style={{ marginTop: '1rem', border: 'none', color: 'white' }}><InboxOutlined style={{ fontSize: '1.3rem' }} /> Send Email</Button>
        </Link>
      </div>
    </div>
  )
}

export default Profile_View_Page