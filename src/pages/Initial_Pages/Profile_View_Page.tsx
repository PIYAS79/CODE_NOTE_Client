import { Button, Image } from "antd"
import User_Codes from "../../components/User_Codes"
import { InboxOutlined } from "@ant-design/icons"
import { Link, useLocation } from "react-router-dom"
import { Single_User_Type } from "../../interfaces/user.interface"
import { convertDateFormat } from "../../utils/convertDateFormat"
import { useGetUserCodesQuery } from "../../redux/api/timelineApi"


const Profile_View_Page = () => {

  const location = useLocation();
  const authorDetails = location?.state as Single_User_Type;
  const {data}=useGetUserCodesQuery({uid:authorDetails.user._id});

  return (
    <div className="codeWrapper" >
      <div className="codeLeft">
        <User_Codes datas={data?.result}/>
      </div>
      <div className="codeRight">
        <Image
          width={80}
          height={80}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          src={authorDetails?.user?.profileImage?authorDetails?.user?.profileImage: "https://res.cloudinary.com/do7nin6oo/image/upload/v1722542959/Profile_iky5vd.jpg"}
        />
        {authorDetails?.user?.role === 'STUDENT' ?
          <p style={{ backgroundColor: '#e2751b',margin:'1rem 0rem .5rem 0rem', fontWeight: '100', color: 'white', padding: '0rem .5rem', borderRadius: '.5rem' }}>student</p>
          :
          <p style={{ backgroundColor: '#782000',margin:'1rem 0rem .5rem 0rem', fontWeight: '100', color: 'white', padding: '0rem .5rem', borderRadius: '.5rem' }}>faculty</p>
        }
        <p style={{ fontWeight: '600',fontFamily: 'var(--Wittgenstein)' }}>{authorDetails?.fullName}</p>
        <p style={{ fontWeight: '400' }}>Since : {convertDateFormat(authorDetails?.user?.createdAt)}</p>
        <p style={{ fontWeight: '400' }}>Department : {authorDetails?.department}</p>
        <Link to={'/timeline/email'}>
          <Button className="web-button" style={{ marginTop: '1rem', border: 'none', color: 'white' }}><InboxOutlined style={{ fontSize: '1.3rem' }} /> Send Email</Button>
        </Link>
      </div>
    </div>
  )
}

export default Profile_View_Page
