import { Image } from "antd"
import { NavLink } from "react-router-dom"
import { Single_User_Type } from "../interfaces/user.interface"


const User_Card = ({ data }: { data: Single_User_Type }) => {

    return (
        <NavLink to={`/timeline/${data?._id}`} state={data} className="userCard">
            <Image
                width={50}
                height={50}
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
                src={data?.user?.profileImage? data?.user?.profileImage:"https://res.cloudinary.com/do7nin6oo/image/upload/v1722542959/Profile_iky5vd.jpg"}
            />
            <div>
                <span style={{ backgroundColor: 'olive', color: 'white', marginRight: '.3rem', padding: '0rem .5rem', borderRadius: '.2rem' }}>{data.department}</span>
                {
                    data.user.role === 'STUDENT' ?
                        <span style={{ backgroundColor: 'orange', color: 'black', padding: '0rem .5rem', borderRadius: '.2rem', textTransform: 'lowercase' }}>{data.user.role}</span>
                        :
                        <span style={{ backgroundColor: 'gray', color: 'white', padding: '0rem .5rem', borderRadius: '.2rem', textTransform: 'lowercase' }}>{data.user.role}</span>
                }
                <p style={{ fontWeight: 'bold', color: 'black' }}>Name : <span style={{ fontWeight: '400' }}>{data.fullName}</span></p>
            </div>
        </NavLink>
    )
}

export default User_Card