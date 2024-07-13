import { StarFilled, StarOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"


const Card = () => {
    return (
        <NavLink to={`/profile/${5}`} target="_blank" className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
            <div>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Title : <span style={{ fontWeight: '200' }}>Algorithm Course</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Title : <span style={{ fontWeight: '200' }}>C++</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Title : <span style={{ fontWeight: '200' }}>C++</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Title : <span style={{ fontWeight: '200' }}>C++</span></p>
            </div>
            <div>
                <StarOutlined style={{color:'gray'}}/>
                <StarFilled style={{color:'red'}}/>
            </div>
        </NavLink>
    )
}

export default Card