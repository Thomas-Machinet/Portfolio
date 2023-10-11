import './Skill.scss';
import { SkillsArray, Skills } from '../../assets/Interface/skillInterface';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Skill({ skillFrontEnd }: SkillsArray) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    const backControls = useAnimation();
    const frontControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log("!!");
            mainControls.start("visible");
            backControls.start("visible");
            frontControls.start("visible");

        }
    }, [isInView])

    return (
        <>
            <motion.h2 className="skillHeader__title"
                id='Skills'

                variants={{
                    hidden: { opacity: 0, x: -500 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.3 }}>SKILLS
            </motion.h2>
            <section className="skillHeader"
                ref={ref}
            >
                <h3 className="skillBox__frontEnd--title">Front-End</h3>
                <motion.div
                    className="skillBox__frontEnd--box"
                    variants={{
                        hidden: { opacity: 0, x: -500 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={frontControls}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h3 className="skillBox__frontEnd--title-desktop">Front-End</h3>
                    {skillFrontEnd.slice(0, 3).map((skill: Skills) => (
                        <div className="skillBox__frontEnd--item"

                            key={skill.id}>
                            <img src={skill.link} alt="skill" className="skillBox__frontEnd--item-image" />
                            <h3
                                style={{ color: skill.color }}
                                className="skillBox__frontEnd--item-name">{skill.name}</h3>
                        </div>
                    ))}
                </motion.div>
                <h3 className="skillBox__frontEnd--title">Back-End</h3>
                <motion.div className="skillBox__frontEnd--box"
                    variants={{
                        hidden: { opacity: 0, x: 500 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={backControls}
                    transition={{ duration: 1, delay: 0.3 }}>
                    <h3 className="skillBox__frontEnd--title-desktop">Back-End</h3>
                    {skillFrontEnd.slice(3, 6).map((skill: Skills) => (
                        <div className="skillBox__frontEnd--item"
                            key={skill.id}>
                            <img src={skill.link} alt="skill" className="skillBox__frontEnd--item-image" />
                            <h3 className="skillBox__frontEnd--item-name"
                                style={{ color: skill.color }}>{skill.name}</h3>
                        </div>
                    ))}
                </motion.div>
            </section>
        </>
    )
}

export default Skill;