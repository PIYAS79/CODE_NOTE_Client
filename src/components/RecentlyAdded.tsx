import Card from "./Card"


const RecentlyAdded = () => {
  return (
    <div style={{overflow:'hidden'}}>
        <p style={{color:'#474740',fontWeight:'bold',fontSize:'1rem',fontFamily: 'var(--Wittgenstein)',marginBlock:'5px'}}>Recently Added</p>
        <div className="cardWrapperRecent">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}

export default RecentlyAdded