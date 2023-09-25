import face from '../../../public/Design_sans_titre__1_-removebg-preview.png'
import faceDesktop from '../../../public/Design_sans_titre-removebg.png'
import CV from '../../../public/CV.pdf'
import { GitHub, Linkedin, Download } from 'react-feather';
import './Portrait.scss'
import { motion } from 'framer-motion';

function Portrait() {
    return (
        <>
            <motion.h2
                animate={{ x: [-1500, 0] }}
                transition={{
                    ease: "linear",
                    duration: 2,
                    x: { duration: 1 }
                }}
                className="title">WHO I'M I ?</motion.h2>
            <motion.section
                className="portrait"
                animate={{ x: [1500, 0] }}
                transition={{
                    ease: "linear",
                    duration: 2,
                    x: { duration: 1 }
                }}>


                <img className="portrait__face" src={face} alt='face'></img>
                <img className="portrait__face-desktop" src={faceDesktop} alt='face'></img>
                <p className="portrait__resume"><span className="portrait__resume-intro">Hello there! I'm</span>
                    <span className="portrait__resume-name">Thomas Machinet</span>After training in the field of Web development, I gained numerous skills and knowledge through projects carried out in various programming languages.
                    Aware of the path ahead to enhance my skills, I am more motivated than ever to learn and improve.</p>
            </motion.section>
            <div className="portrait__link">

                <motion.a
                    href="https://www.linkedin.com/in/thomas-machinet-71201926a"
                    className="portrait__link-item"
                    target='_blank'
                    animate={{ x: [-2000, 0] }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.5,
                    }}>
                    <Linkedin color='#453948'
                        size='30px' />
                    Linkedin
                </motion.a>
                <motion.a
                    href="https://github.com/Thomas-Machinet"
                    className="portrait__link-item"
                    target='_blank'
                    animate={{ x: [-2000, 0] }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.8,
                    }}>
                    <GitHub color='#453948'
                        size='30px' />
                    GitHub
                </motion.a>
                <motion.a href={CV} className="portrait__link-item"
                    download
                    animate={{ x: [-2000, 0] }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 1.1,
                    }}>
                    <Download color='#453948'
                        size='30px' />CV
                </motion.a>


            </div>
        </>

    )
}

export default Portrait;