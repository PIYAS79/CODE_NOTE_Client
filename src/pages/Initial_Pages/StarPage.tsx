
import Card from '../../components/Card'
import { StarOutlined } from '@ant-design/icons'
import { useGetUserStarCodesQuery } from '../../redux/api/codeApi'
import { useAppSelector } from '../../redux/hooks'
import { Card_Type } from '../../global/card.interface'

const StarPage = () => {

  const user_id = useAppSelector(state => state.auth._id);
  const { data } = useGetUserStarCodesQuery({uid:user_id});

  console.log(data?.data);

  return (
    <div>
      <div style={{ margin: '24px' }}>
        <p style={{ color: '#474740', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'var(--Wittgenstein)', marginBottom: '15px' }}><StarOutlined /> Star Codes</p>
        <div className="cardWrapperRecent">

          {
            data?.data?.length === 0 ?
              <small style={{ color: 'red' }}>No Codes Found !</small>
              :
              data?.data?.map((one: Card_Type) => {
                if (one.isStar) {
                  return (<Card data={one} key={one._id} />)
                }
              })
          }


        </div>
      </div>
    </div>
  )
}

export default StarPage