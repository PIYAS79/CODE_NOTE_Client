import { useEffect, useState } from 'react';
import { Skill_Option } from "../global/skills_options"
import { useAppSelector } from "../redux/hooks"
import my_skill_icons from '../utils/skill_icons';

const Skill_Section = () => {

    const { me } = useAppSelector(state => state.auth);
    const [skills, setSkills] = useState<Skill_Option[] | []>([]);
    useEffect(() => {
        if (me?.skills) {
            const x = my_skill_icons(me?.skills);
            setSkills(x);
        }
    }, [me])


    return (
        <div className='skillWrapperRecent' style={{ fontSize: '1.3rem', gap: '.3rem' }}>
            {
                skills?.length ===0 && <small style={{fontSize:'12px',color:'tomato'}}>no skills found !</small>
            }
            {
                skills.map(one => {
                    return (
                        <img key={one.label} width={30} src={one.icon} />
                    )
                })
            }
        </div>
    )
}

export default Skill_Section