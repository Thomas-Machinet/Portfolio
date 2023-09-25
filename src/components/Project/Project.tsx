import './Project.scss';
import Card from './Card/Card';

// Interface 
import { ProjectArray, ProjectItem } from '../../assets/Interface/projectInterface';
import { motion, useScroll, scroll, progress, animate, useInView, useAnimation } from 'framer-motion';
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
            <div ref={ref} >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, x: -500 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="project__header"
                >PROJECT
                </motion.h2>
            </div>
            <motion.section
                className="project"
                variants={{
                    hidden: { opacity: 0, y: 500 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={projectControls}
                transition={{ duration: 1.5, delay: 1 }}>
                {data.map((project: ProjectItem) => (
                    <Card key={project.id} {...project} />
                ))}
            </motion.section>

        </>
    )
}

export default Project;