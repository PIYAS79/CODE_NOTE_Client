import { Button, Image } from "antd"
import { Code_Author_Type } from "../interfaces/singleCode.interface"
import { convertDateFormat } from "../utils/convertDateFormat"
import { useAppSelector } from "../redux/hooks"
import { useCreateStackReqMutation } from "../redux/api/stackApi"
import { toast } from "sonner"


const AuthorDetails = ({ author, authorPP, cid, cauth }: { author: Code_Author_Type, authorPP: string, cid: string, cauth: string }) => {
    const me = useAppSelector(state => state.auth.me);

    const userData = useAppSelector(state => state.auth.user);
    const from = useAppSelector(state => state.auth._id);
    const [sendReqFnc] = useCreateStackReqMutation();


    const handleClickSendReq = async () => {
        const toastId = toast.loading('sending request...', { position: 'top-center', duration: 2000 });
        try {
            const data = {
                from,
                author: cauth,
                code_id: cid,
                author_name: author.fullName,
                author_pp: authorPP || '',
                sender_name: me?.fullName,
                sender_pp: me?.user?.profileImage || '',
            }
            const res: any = await sendReqFnc({ data });
            if (res?.data?.success) {
                toast.success("Successfully Send Code Req !", { position: 'top-center', id: toastId, duration: 2000 });
            }
            if (res?.error?.status == 409) {
                toast.error(res?.error?.data?.errorTitle, { position: 'top-center', id: toastId, duration: 2000 });
            }
            // success message
        } catch (err) {
            toast.error('There is a server side error !', { position: 'top-center', id: toastId, duration: 2000 });
        }
    }

    return (
        <>
            <Image
                width={80}
                height={80}
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
                src={authorPP ? authorPP : "../../assets/Profile.jpg"}
            />

            <div style={{ margin: '1rem 0rem .5rem 0rem', fontWeight: '600', fontFamily: 'var(--Wittgenstein)' }}>
                {author?.studentId ?
                    <p style={{ backgroundColor: '#e2751b', fontWeight: '100', color: 'white', padding: '0rem .5rem', borderRadius: '.5rem' }}>student</p>
                    :
                    <p style={{ backgroundColor: '#782000', fontWeight: '100', color: 'white', padding: '0rem .5rem', borderRadius: '.5rem' }}>faculty</p>
                }
            </div>
            <p style={{ fontWeight: '600', fontSize: '1rem' }}>S M {author?.fullName}</p>
            <p style={{ fontWeight: '400', fontFamily: 'var(--Wittgenstein)' }}>
                {author?.studentId ? `Student ID : ${author?.studentId}` : `Faculty ID : ${author?.teacherId}`}
            </p>
            <p style={{ fontWeight: '400', fontFamily: 'var(--Wittgenstein)' }}>Department : {author?.department}</p>
            <p style={{ fontWeight: '400' }}>Since : {convertDateFormat(author?.createdAt)}</p>
            {
                author?.email === userData?.email ?
                    <small style={{ border: '1px solid tomato', padding: '.15rem .8rem', marginTop: '.5rem', borderRadius: '.5rem', color: '#782000' }}>Your Code </small>
                    :
                    <Button onClick={handleClickSendReq} className="web-button" style={{ marginTop: '1rem', border: 'none', color: 'white' }}>Send Code Request</Button>
            }
        </>
    )
}

export default AuthorDetails