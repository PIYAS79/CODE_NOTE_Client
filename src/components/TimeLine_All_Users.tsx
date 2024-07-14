import { useAppSelector } from "../redux/hooks"
import User_Card from "./User_Card"


const TimeLine_All_Users = () => {
    const selectVal = useAppSelector(state=>state.timeline.searchSelect_value);
    return (
        <>
            <h4 style={{ color: '#f36214', fontFamily: 'var(--Wittgenstein)', marginBottom: '.5rem' }}>All <span style={{textTransform:'capitalize'}}>{selectVal}</span></h4>
            <div className="">
                <div className="cardWrapperRecent">
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                </div>
            </div>
        </>
    )
}

export default TimeLine_All_Users