import { DeleteOutlined, DownOutlined, RightCircleFilled, StarOutlined } from "@ant-design/icons"
import { Button, Dropdown, Image, MenuProps, Space } from "antd"
import { FcCheckmark } from "react-icons/fc";



const Stack_Receive_Req_Card = () => {




    const items: MenuProps['items'] = [
        {
            label: `Accept`,
            key: 'accept',
            icon: <FcCheckmark />,
            style:{color:'green'}
        },
        {
            label: 'Delete',
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
                <Dropdown menu={menuProps}>
                    <Button style={{ border: 'none',outline:'none' }}>
                        <Space>
                            actions
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </div>
            <p style={{marginTop:'.2rem'}}>To : User FUll Name</p>
            <p>Create Req At : 12 Dec 2024</p>
        </div>
    )
}

export default Stack_Receive_Req_Card