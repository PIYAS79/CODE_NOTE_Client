import { Card_Type } from "../global/card.interface";
import Card from "./Card"
import NewCode from './NewCode';


const RecentlyAdded = ({ data }: { data: Card_Type[] }) => {


  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5rem' }}>
        <p style={{ color: '#474740', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'var(--Wittgenstein)' }}>Recently Added</p>
        <NewCode />
      </div>
      <div className="cardWrapperRecent">
        {
          data?.length == 0 ?
            <small style={{color:'red'}}>No Recent Code Found !</small>
            : data?.map((one: Card_Type) => <Card data={one} key={one._id} />)
        }
      </div>
    </div>
  )
}

export default RecentlyAdded