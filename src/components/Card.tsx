import { StarFilled, StarOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"
import { Card_Type } from "../global/card.interface"


const Card = ({ data, key }: { data: Card_Type, key: any }) => {
    return (
        <NavLink to={`/profile/${5}`} target="_blank" className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '16px' }}>Title : <span style={{ fontWeight: '200' }}>{data?.title}</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '14px' }}>Course Code : <span style={{ fontWeight: '200' }}>{data?.courseCode}</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '14px' }}>Language : <span style={{ fontWeight: '200' }}>{data?.language}</span></p>
                <p style={{ color: '#474740', fontWeight: '700', fontFamily: 'var(--Wittgenstein)', fontSize: '14px' }}>Create at : <span style={{ fontWeight: '200' }}>{data?.createdAt}</span></p>
            </div>
            <div>
                {
                    data.isStar ?
                        <StarFilled style={{ color: '#ff4500' }} />
                        :
                        <StarOutlined style={{ color: 'gray' }} />
                }
            </div>
        </NavLink>
    )
}

export default Card