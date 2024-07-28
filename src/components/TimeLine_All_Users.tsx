import { Single_User_Type } from "../interfaces/user.interface";
import { useGetUserQuery } from "../redux/api/timelineApi";
import { setUsers } from "../redux/features/timeLineSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import User_Card from "./User_Card"


const TimeLine_All_Users = () => {
    const { inputval, selectVal } = useAppSelector(state => state.timeline);
    const dispatch = useAppDispatch();
    const { data } = useGetUserQuery({role:selectVal,tag:inputval});
    dispatch(setUsers(data?.result))
    const users = useAppSelector(state => state.timeline.users)

    return (
        <>
            <h4 style={{ color: '#f36214', fontFamily: 'var(--Wittgenstein)', marginBottom: '.5rem' }}>All <span style={{ textTransform: 'capitalize' }}>{selectVal}</span></h4>
            <div className="">
                <div className="cardWrapperRecent">
                    {
                        users?.length == 0 ?
                            <small style={{ color: 'red' }}>No <span style={{ textTransform: 'capitalize' }}>{selectVal}</span> Found !</small>
                            :
                            users?.map((one: Single_User_Type) => <User_Card data={one} key={one._id} />)
                    }
                </div>
            </div>
        </>
    )
}

export default TimeLine_All_Users