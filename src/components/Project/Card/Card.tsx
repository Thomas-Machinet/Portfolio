import './Card.scss';
import { ProjectItem, Techno } from '../../../assets/Interface/projectInterface';
import { GitHub } from 'react-feather';
import { motion } from 'framer-motion';

function Card({ resume, techno, title, link, image, imageDesktop }: ProjectItem) {

    return (
        <>
            <motion.div
                className="project__card"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.5, 0.7, 1]
                }}
            >
                <img src={image} alt="project" className="project__card-image" />
                <img src={imageDesktop} alt="project" className="project__card-image-desktop" />
                <div className="project__card-text">
                    <h3 className="project__card-title">{title}</h3>
                    <p className="project__card-resume">{resume}</p>
                    <ul className="project__card-techno">
                        {techno.map((technoItem: Techno) => (
                            <li
                                key={technoItem.id}
                                className="project__card-techno-item"
                                style={{ backgroundColor: technoItem.color }}
                            >
                                {technoItem.name}
                            </li>
                        ))}
                    </ul>
                    <a target='_blank' href={link} className="project__card-link"><GitHub /></a>
                </div>
            </motion.div>
        </>
    )
}

export default Card