import { Skill_Option, skill_options } from "../global/skills_options";



const my_skill_icons = (skills: string[] | []) => {
    if (skills.length == 0) {
        return []
    }
    const myIcons: Skill_Option[] = [];
    skill_options.forEach(one => {
        skills.forEach(langOne => {
            if (langOne == one.value) {
                myIcons.push(one);
            }
        })
    })
    return myIcons;
}


export default my_skill_icons;