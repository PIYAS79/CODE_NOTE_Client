import { skill_options } from "../global/skills_options"

const Skill_Section = () => {
    return (
        <div className='skillWrapperRecent' style={{ fontSize: '1.3rem', gap: '.3rem' }}>

            {
                skill_options.slice(0,9).map(one => {
                    return (
                        <img key={one.label} width={30} src={one.icon} />
                    )
                })
            }

        </div>
    )
}

export default Skill_Section