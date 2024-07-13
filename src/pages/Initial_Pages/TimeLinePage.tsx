import { Image } from "antd"
import Card from "../../components/Card"

const TimeLinePage = () => {
    return (
        <div className="timelineWrapper">
            <div className="timelineHeader">
                <h1 className='web-color' style={{ fontFamily: 'var(--Wittgenstein)' }}>TIME_LINE</h1>
                <p style={{ fontFamily: 'var(--Playwrite)' }}>Let's see who coded what around you!</p>
            </div>
            <div className="timeLineBoxWrapper">
                <div className="timelineLeft">
                    <h4 style={{ color:'#f36214',fontFamily: 'var(--Wittgenstein)', marginBottom: '.5rem' }}>Code of your friends and teachers</h4>
                    <div className="">
                        <div className="cardWrapperRecent">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
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