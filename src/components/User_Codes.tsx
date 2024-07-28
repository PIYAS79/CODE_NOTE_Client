import { Card_Type } from '../global/card.interface'
import { Single_Code_Type } from '../interfaces/singleCode.interface'
import Card from './Card'

const User_Codes = ({ datas }: { datas: Single_Code_Type[] }) => {
    return (
        <>
            <p style={{ color: '#474740', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'var(--Wittgenstein)', marginBottom: '5px' }}>User Codes</p>
            <div className="cardWrapperRecent">
                {
                    datas?.length == 0 ?
                        <small style={{ color: 'red' }}>No Recent Code Found !</small>
                        : datas?.map((one: Card_Type) => <Card data={one} key={one._id} />)
                }
            </div>
        </>
    )
}

export default User_Codes