import './Project.scss';
import Card from './Card/Card';

// Interface 
import { ProjectArray, ProjectItem } from '../../assets/Interface/projectInterface';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Project({ data }: ProjectArray) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const projectControls = useAnimation();

    useEffect(() => {


        if (isInView) {
            console.log("ALERT");
            mainControls.start("visible")
            projectControls.start("visible")
        }

    }, [isInView])


    return (
        <>
            <section
                className='project__box'>
                <motion.h2
                    id='Projects'
                    variants={{
                        hidden: { opacity: 0, x: -500 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="project__header"
                >PROJECT
                </motion.h2>

                <motion.section

                    ref={ref}
                    className="project"
                    variants={{
                        hidden: { opacity: 0, y: 500 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={projectControls}
                    transition={{ duration: 1.5, delay: 0.3 }}>
                    {data.map((project: ProjectItem) => (
                        <Card key={project.id} {...project} />
                    ))}
                </motion.section>
            </section>

        </>
    )
}

export default Project;