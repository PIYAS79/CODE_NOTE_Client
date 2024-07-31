import SingleCodeField from "../../components/SingleCodeField"
import AuthorDetails from "../../components/AuthorDetails"
import { Button, Dropdown, MenuProps, Space, message } from "antd"
import { useNavigate, useParams } from "react-router-dom";
import { DeleteOutlined, DownOutlined, StarOutlined } from "@ant-design/icons";
import { convertDateFormat } from "../../utils/convertDateFormat";
import { useDeleteCodeMutation, useGetSingleCodesQuery, useUpdateCodeMutation } from "../../redux/api/codeApi";
import UpdateCodeModal from "../../components/MarkStarModal";
import { useAppSelector } from "../../redux/hooks";



const SingleCodePage = () => {
    const params = useParams();
    const { data } = useGetSingleCodesQuery(params.cid);
    const userId = useAppSelector(state=>state.auth._id);
    const [updateCodeFnc] = useUpdateCodeMutation();
    const [deleteCodeFnc]=useDeleteCodeMutation();
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            label: `${data?.code?.isStar ? "Mark Un-Star" : "Mark Star"}`,
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
            await updateCodeFnc({ data: { isStar: !data?.code?.isStar }, cid: data?.code?._id })
            await message.success(`Successfully Mark ${data?.code?.isStar ? 'Un-Star' : 'Star'} *!`)
        }else if (e.key === 'delete'){
            message.loading("Deleting Code ...!")
            await deleteCodeFnc(data?.code?._id);
            navigate('/profile');
            message.success("Successfully Delete a code !");
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
                    <p style={{ fontFamily: 'var(--Wittgenstein)', margin: '1rem 0rem 1.5rem 0rem', color: '#4a4a4a', fontSize: '1.2rem' }}>Title : <span style={{ fontWeight: "bold" }}>{data?.code?.title}</span></p>
                    {
                        data?.code?.author === userId && <div style={{ marginLeft: 'auto' }}>
                        <Dropdown menu={menuProps}>
                            <Button style={{ border: '1px solid #782000s' }}>
                                <Space>
                                    actions
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>
                    }
                    <div style={{ marginLeft: '1.2rem', backgroundColor: 'gray', padding: '0rem', borderRadius: '.5rem', color: 'white' }}>
                        {data?.code && data?.code?.author === userId ? <UpdateCodeModal codeData={data?.code} /> : <div></div>}
                    </div>
                </div>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Course Code : <span style={{ fontWeight: "bold" }}>{data?.code?.courseCode}</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Language : <span style={{ fontWeight: "bold", textTransform: 'uppercase' }}>{data?.code?.language}</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Created At : <span style={{ fontWeight: "bold" }}>{convertDateFormat(data?.code?.createdAt)}</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Updated At : <span style={{ fontWeight: "bold" }}>{convertDateFormat(data?.code?.updatedAt)}</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '2rem', color: '#4a4a4a' }}>isStar : <span style={{ fontWeight: "bold" }}>{data?.code?.isStar?'True':"False"}</span></p>
                
                {data?.code ? <SingleCodeField code={data?.code?.code} />:<div></div>}
            </div>
            <div className="codeRight">
                {data?.author?<AuthorDetails author={data?.author} authorPP={data?.authorPP} cid={data?.code?._id} cauth={data?.code?.author} />:<div></div>}
            </div>
        </div>
    )
}

export default SingleCodePage