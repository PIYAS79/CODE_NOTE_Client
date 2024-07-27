import { Button, Image } from "antd"
import { Code_Author_Type } from "../interfaces/singleCode.interface"
import { convertDateFormat } from "../utils/convertDateFormat"
import { useAppSelector } from "../redux/hooks"


const AuthorDetails = ({ author }: { author: Code_Author_Type }) => {

    const userData = useAppSelector(state => state.auth.user);

    return (
        <>
            <Image
                width={80}
                height={80}
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
                src="https://i.ibb.co/ZcPTCkG/Screenshot-2023-12-02-225247.png"
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
                    <small style={{border:'1px solid tomato',padding:'.15rem .8rem',marginTop:'.5rem',borderRadius:'.5rem',color:'#782000'}}>Your Code </small>
                    :
                    <Button className="web-button" style={{ marginTop: '1rem', border: 'none', color: 'white' }}>Send Code Request</Button>
            }
        </>
    )
}

export default AuthorDetails