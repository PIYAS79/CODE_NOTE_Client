import Card from "./Card"
import NewCode from './NewCode';


const RecentlyAdded = () => {

  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5rem' }}>
        <p style={{ color: '#474740', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'var(--Wittgenstein)' }}>Recently Added</p>
        <NewCode />
      </div>
      <div className="cardWrapperRecent">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default RecentlyAdded