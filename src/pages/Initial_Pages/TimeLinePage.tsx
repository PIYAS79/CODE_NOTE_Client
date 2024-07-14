import { Image } from "antd"
import TimeLine_Left_Layout from "../../layouts/TimeLine_Left_Layout"
import TimeLine_Search from "../../components/TimeLine_Search"

const TimeLinePage = () => {
    return (
        <div className="timelineWrapper">
            <div className="timelineHeader">
                <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>TIME_LINE</h1>
                <p style={{ fontFamily: 'var(--Playwrite)' }}>Let's see who coded what around you!</p>
                <TimeLine_Search/>
            </div>
            <div className="timeLineBoxWrapper">
                <div className="timelineLeft">
                    <TimeLine_Left_Layout/>
                </div>
                <div className="timelineRight">
                    <h4 style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '.5rem',color:'green' }}>University Activities</h4>
                    <Image
                        className=''
                        style={{
                            objectFit: 'cover',
                        }}
                        src="https://i.ibb.co/GVNSkDc/5b4915c6c99e9c5989770d47331b15ee6976d667.jpg"
                    />
                        <Image
                            className=''
                            style={{
                                objectFit: 'cover',
                                marginTop:'1rem'
                            }}
                            src="https://i.ibb.co/1nC05CG/coding-competition-design-template-800dfc141dd537c0ff0d0981ad0ade80-screen.jpg"
                        />
                    <Image
                        className=''
                        style={{
                            objectFit: 'cover',
                            marginTop:'1rem'
                        }}
                        src="https://i.ibb.co/X5Ydh8Y/429556187-908504627943570-3626727143545059394-n.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default TimeLinePage