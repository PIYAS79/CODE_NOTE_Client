import { Image } from "antd"
import { NavLink } from "react-router-dom"


const User_Card = () => {

    
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
            <span style={{backgroundColor:'olive',color:'white',marginRight:'.3rem',padding:'0rem .5rem',borderRadius:'.2rem'}}>CSE</span>
            <span style={{backgroundColor:'orange',color:'black',padding:'0rem .5rem',borderRadius:'.2rem'}}>student</span>
            {/* <span style={{backgroundColor:'gray',color:'white',padding:'0rem .5rem',borderRadius:'.2rem'}}>faculty</span> */}
                <p style={{fontWeight:'bold',color:'black'}}>Name : <span style={{fontWeight:'400'}}>S M Piyas Mahamude Alif</span></p>
            </div>
        </NavLink>
    )
}

export default User_Card