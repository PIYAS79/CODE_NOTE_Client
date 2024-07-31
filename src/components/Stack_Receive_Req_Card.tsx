import { DeleteOutlined, DownOutlined } from "@ant-design/icons"
import { Button, Dropdown, Image, MenuProps, Space } from "antd"
import { FcCheckmark } from "react-icons/fc";
import { useReceiveStackReqQuery, useStackReqDecisionMutation } from "../redux/api/stackApi";
import { useAppSelector } from "../redux/hooks";
import { Single_Stack_Data } from "../global/stack.interface";
import { convertDateFormat } from "../utils/convertDateFormat";
import { toast } from "sonner";



const Stack_Receive_Req_Card = ({ data }: { data: Single_Stack_Data }) => {

    const [stackDecisionFnc] = useStackReqDecisionMutation()


    const items: MenuProps['items'] = [
        {
            label: `Accept`,
            key: 'accept',
            icon: <FcCheckmark />,
            style: { color: 'green' }
        },
        {
            label: 'Delete',
            key: 'delete',
            icon: <DeleteOutlined />,
            danger: true,
        },
    ];

    const handleMenuClick: MenuProps['onClick'] = async (e) => {
        if (e.key === 'accept') {
            const toastId = toast.loading('Accepting Request...', { position: 'top-center', duration: 2000 });
            try {
                const res = await stackDecisionFnc({ status: true, sid: data?._id });
                console.log(res);
                if (res.data) {
                    toast.success("Successfully Accept Code Req !", { position: 'top-center', id: toastId, duration: 2000 });
                }
            } catch (err) {
                toast.error('There is a server side error !', { position: 'top-center', id: toastId, duration: 2000 });
            }
        } else if (e.key === 'delete') {
            const toastId = toast.loading('Deleting Request...', { position: 'top-center', duration: 2000 });
            try {
                const res = await stackDecisionFnc({ status: false, sid: data?._id });
                console.log(res);
                if (res.data) {
                    toast.success("Successfully Delete Code Req !", { position: 'top-center', id: toastId, duration: 2000 });
                }
            } catch (err) {
                toast.error('There is a server side error !', { position: 'top-center', id: toastId, duration: 2000 });
            }
        }
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
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
                    src={data?.sender_pp ? data?.sender_pp : "../../assets/Profile.jpg"}
                />
                <Dropdown menu={menuProps}>
                    <Button style={{ border: 'none', outline: 'none' }}>
                        <Space>
                            actions
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </div>
            <p style={{ marginTop: '.2rem' }}>From, {data?.sender_name}</p>
            <p>Create Req At {convertDateFormat(data?.createdAt)}</p>
        </div>
    )
}

export default Stack_Receive_Req_Card