import { StarFilled, StarOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"


const Card = () => {
    return (
        <NavLink to={`/profile/${5}`} target="_blank" className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
            <div>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Title : <span style={{ fontWeight: '200' }}>Algorithm Course</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '14px' }}>Course Code : <span style={{ fontWeight: '200' }}>CSE331</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '14px' }}>Language : <span style={{ fontWeight: '200' }}>C++</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '14px' }}>Create at : <span style={{ fontWeight: '200' }}>C++</span></p>
            </div>
            <div>
                <StarOutlined style={{color:'gray'}}/>
                <StarFilled style={{color:'#ff4500'}}/>
            </div>
        </NavLink>
    )
}

export default Card