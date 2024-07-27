import { Card_Type } from "../global/card.interface";
import { useGetCodesQuery } from "../redux/api/timelineApi"
import { setCodes } from "../redux/features/timeLineSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Card from "./Card"


const TimeLine_All_Codes = () => {

    const {inputval,} = useAppSelector(state=>state.timeline);
    const dispatch = useAppDispatch();
    const { data } = useGetCodesQuery(inputval);
    dispatch(setCodes(data?.result));

    const codes = useAppSelector(state => state.timeline.codes);

    return (
        <>
            <h4 style={{ color: '#f36214', fontFamily: 'var(--Wittgenstein)', marginBottom: '.5rem' }}>Code of your friends and teachers</h4>
            <div className="">
                <div className="cardWrapperRecent">
                    {
                        codes?.length == 0 ?
                            <small style={{ color: 'red' }}>No Recent Code Found !</small>
                            : codes?.map((one: Card_Type) => <Card data={one} key={one._id} />)
                    }
                </div>
            </div>
        </>
    )
}

export default TimeLine_All_Codes