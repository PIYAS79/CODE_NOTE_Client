import Stack_Receive_Req_Card from "../../components/Stack_Receive_Req_Card"
import Stack_Send_Req_Card from "../../components/Stack_Send_Req_Card"
import { MdCallReceived } from "react-icons/md"
import { useGetStackSendReqQuery, useReceiveStackReqQuery } from "../../redux/api/stackApi"
import { useAppSelector } from "../../redux/hooks"
import { Single_Stack_Data } from "../../global/stack.interface"

const StackPage = () => {
    const uid = useAppSelector(state => state.auth._id);
    const { data: receivedDatas } = useReceiveStackReqQuery({ uid });
    const { data: sendDatas } = useGetStackSendReqQuery({ uid })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
            <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>CODE NOTE</h1>
            <small style={{ fontFamily: 'var(--Playwrite)', margin: '-.4rem 0rem .5rem 0rem' }}>Easy, Perfect & Instant Note</small>
            <h2 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Your_STACK_Status</h2>

            {/* main content start from here  */}
            <div className="stackWrppaer">
                <div style={{ padding: '1rem' }}>
                    <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: '600', fontFamily: 'var(--Wittgenstein)', marginBottom: '.5rem', color: '#4a4a4a' }}>Send Request <MdCallReceived style={{ rotate: '180deg', color: 'tomato' }} /></p>
                    {
                        sendDatas?.data?.length === 0 ?
                            <p style={{ color: 'tomato', textAlign: 'center' }}>no send req found !</p>
                            :
                            <>
                                {
                                    sendDatas?.data?.map((one: Single_Stack_Data) => <Stack_Send_Req_Card key={one._id} data={one} />)
                                }
                            </>
                    }
                </div>
                <div style={{ padding: '1rem' }}>
                    <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: '600', fontFamily: 'var(--Wittgenstein)', marginBottom: '.5rem', color: '#4a4a4a' }}>Received Request <MdCallReceived style={{ color: 'tomato' }} /></p>
                    {
                        receivedDatas?.length === 0 ?
                            <p style={{ color: 'tomato', textAlign: 'center' }}>no receive req found !</p>
                            :
                            <>
                                {
                                    receivedDatas?.map((one: Single_Stack_Data) => <Stack_Receive_Req_Card key={one._id} data={one} />)
                                }
                            </>
                    }
                </div>
            </div>

        </div>
    )
}

export default StackPage