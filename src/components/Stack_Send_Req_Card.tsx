import { Button, Image, Modal } from "antd"
import { Single_Stack_Data } from "../global/stack.interface";
import { convertDateFormat } from "../utils/convertDateFormat";
import { useState } from "react";
import { useCancelStackSendReqMutation } from "../redux/api/stackApi";
import { toast } from "sonner";


const Stack_Send_Req_Card = ({ data }: { data: Single_Stack_Data }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cancelStackReqFnc] = useCancelStackSendReqMutation();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        const toastId = toast.loading('Deleting Code Request...', { position: 'top-center', duration: 2000 });
        try {
            const res = await cancelStackReqFnc({ sid: data?._id });
            if (res.data) {
                toast.success("Successfully Delete Code Req !", { position: 'top-center', id: toastId, duration: 2000 });
                setIsModalVisible(false);
            } else {
                toast.error('There is a server side error !', { position: 'top-center', id: toastId, duration: 2000 });
            }
        } catch (err) {
            toast.error('There is a server side error !', { position: 'top-center', id: toastId, duration: 2000 });
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };




    return (
        <div className="receiveReqCard">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    width={50}
                    height={50}
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                    src={data?.author_pp ? data?.author_pp : "https://res.cloudinary.com/do7nin6oo/image/upload/v1722542959/Profile_iky5vd.jpg"}
                />
                {/* <Button className="declineBtn" style={{ border: 'none', background: 'rgb(194, 0, 0)', color: 'white', outline: 'none' }} >
                    Declined
                </Button> */}
                <Button onClick={showModal} style={{ border: 'none', background: 'rgb(194, 0, 0)', color: 'white', outline: 'none' }}>
                    Declined
                </Button>
                <Modal
                    title="Confirm Deletion"
                    open={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Yes, Delete"
                    cancelText="No, Cancel"
                >
                    <p>Are you sure you want to delete this Request?</p>
                </Modal>

            </div>
            <p style={{ marginTop: '.2rem' }}>To, {data?.author_name}</p>
            <p>Create Req At {convertDateFormat(data?.createdAt)}</p>
        </div>
    )
}

export default Stack_Send_Req_Card