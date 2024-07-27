import { Image } from "antd"
import { NavLink } from "react-router-dom"
import { Single_User_Type } from "../interfaces/user.interface"


const User_Card = ({ data }: { data: Single_User_Type }) => {

    return (
        <NavLink to={`/timeline/${6}`} target="_blank" className="userCard">
            <Image
                width={50}
                height={50}
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
                src="https://i.ibb.co/ZcPTCkG/Screenshot-2023-12-02-225247.png"
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