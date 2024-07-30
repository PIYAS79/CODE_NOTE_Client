import { DeleteOutlined, DownOutlined, StarOutlined } from "@ant-design/icons"
import { Button, Dropdown, Image, MenuProps, Space } from "antd"


const Stack_Send_Req_Card = () => {


    const items: MenuProps['items'] = [
        {
            label: `star`,
            key: 'star',
            icon: <StarOutlined />,
        },
        {
            label: 'Delete Code',
            key: 'delete',
            icon: <DeleteOutlined />,
            danger: true,
        },
    ];

    const handleMenuClick: MenuProps['onClick'] = async (e) => {
        if (e.key === 'star') {

        } else if (e.key === 'delete') {

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
                    src="../../assets/Profile.jpg"
                />
                <Button className="declineBtn" style={{ border: 'none', background: 'rgb(194, 0, 0)', color: 'white', outline: 'none' }} >
                    Declined
                </Button>

            </div>
            <p style={{ marginTop: '.2rem' }}>To : User FUll Name</p>
            <p>Create Req At 12 Dec 2024</p>
        </div>
    )
}

export default Stack_Send_Req_Card