import './Skill.scss';
import { SkillsArray, Skills } from '../../assets/Interface/skillInterface';

function Skill({ skillFrontEnd }: SkillsArray) {
    console.log(skillFrontEnd);

    return (
        <section className="skillHeader">
            <h2 className="skillHeader__title">Skills</h2>
            <h3 className="skillBox__frontEnd--title">Front-End</h3>
            <div className="skillBox__frontEnd--box">
                {skillFrontEnd.slice(0, 3).map((skill: Skills) => (
                    <div className="skillBox__frontEnd--item"
                        key={skill.id}>
                        <img src={skill.link} alt="skill" className="skillBox__frontEnd--item-image" />
                        <h3 className="skillBox__frontEnd--item-name">{skill.name}</h3>
                    </div>
                ))}
            </div>
            <h3 className="skillBox__frontEnd--title">Back-End</h3>
            <div className="skillBox__frontEnd--box">
                {skillFrontEnd.slice(3, 6).map((skill: Skills) => (
                    <div className="skillBox__frontEnd--item"
                        key={skill.id}>
                        <img src={skill.link} alt="skill" className="skillBox__frontEnd--item-image" />
                        <h3 className="skillBox__frontEnd--item-name">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skill;