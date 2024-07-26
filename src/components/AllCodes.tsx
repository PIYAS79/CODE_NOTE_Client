import { Card_Type } from "../global/card.interface"
import Card from "./Card"

const AllCodes = ({ data }: { data: Card_Type[] }) => {
    return (
        <div className="wrapperAllCode">
            <p style={{ color: '#474740', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'var(--Wittgenstein)', marginBlock: '5px' }}>All Codes</p>
            <div className="cardWrapperRecent">
                {
                    data?.length == 0 ?
                        <small style={{ color: 'red' }}>No Codes Found !</small>
                        : data?.length < 5 ?
                            data?.map((one: Card_Type) => <Card data={one} key={one._id} />)
                            :
                            data?.slice(4, data.length)?.map((one: Card_Type) => <Card data={one} key={one._id} />)
                }
            </div>
        </div>
    )
}

export default AllCodes