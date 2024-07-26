import SingleCodeField from "../../components/SingleCodeField"
import AuthorDetails from "../../components/AuthorDetails"
import { Button, Dropdown, MenuProps, Space, message } from "antd"
import { useLoaderData } from "react-router-dom";
import { DeleteOutlined, DownOutlined, EditOutlined, StarFilled, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Single_Code_Type_Res } from "../../interfaces/singleCode.interface";
import { convertDateFormat } from "../../utils/convertDateFormat";
import { useUpdateCodeMutation } from "../../redux/api/codeApi";
import MarkStarModal from "../../components/MarkStarModal";



const SingleCodePage = () => {
    const code = useLoaderData() as Single_Code_Type_Res;
    console.log(code);
    const [updateCodeFnc] = useUpdateCodeMutation();


    const items: MenuProps['items'] = [
        {
            label: `${code.data.code.isStar ? "Mark Un-Star" : "Mark Star"}`,
            key: 'star',
            icon: <StarOutlined />,
        },
        {
            label: 'Update Code',
            key: 'update',
            icon: <EditOutlined />,
        },
        {
            label: 'Delete Code',
            key: 'delete',
            icon: <DeleteOutlined />,
            danger: true,
        },
    ];


    const handleMenuClick: MenuProps['onClick'] = async (e) => {
        // message.info('Click on menu item.');
        console.log('click', e);
        if (e.key === 'star') {
            await updateCodeFnc({ data: { isStar: !code.data.code.isStar }, cid: code.data.code._id })
            await message.success("Successfully Mark Star *!")
        }
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    return (
        <div className="codeWrapper" >
            <div className="codeLeft" style={{ lineHeight: '5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontFamily: 'var(--Wittgenstein)', margin: '1rem 0rem 1.5rem 0rem', color: '#4a4a4a', fontSize: '1.2rem' }}>Title : <span style={{ fontWeight: "bold" }}>{code.data.code.title}</span></p>
                    <div style={{ marginLeft: 'auto' }}>
                        <Dropdown menu={menuProps}>
                            <Button style={{ border: '1px solid #782000s' }}>
                                <Space>
                                    actions
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>
                    <div style={{ marginLeft: '1.2rem', backgroundColor: 'gray', padding: '0rem', borderRadius: '.5rem', color: 'white' }}>
                        <MarkStarModal />
                    </div>
                </div>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Course Code : <span style={{ fontWeight: "bold" }}>{code.data.code.courseCode}</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Language : <span style={{ fontWeight: "bold", textTransform: 'uppercase' }}>{code.data.code.language}</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Created At : <span style={{ fontWeight: "bold" }}>{convertDateFormat(code.data.code.createdAt)}</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '2rem', color: '#4a4a4a' }}>Updated At : <span style={{ fontWeight: "bold" }}>{convertDateFormat(code.data.code.updatedAt)}</span></p>
                <SingleCodeField code={code.data.code.code} />
            </div>
            <div className="codeRight">
                <AuthorDetails author={code.data.author} />
            </div>
        </div>
    )
}

export default SingleCodePage