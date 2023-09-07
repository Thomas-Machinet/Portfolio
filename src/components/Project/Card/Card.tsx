import './Card.scss';
import { ProjectItem, Techno } from '../../../assets/Interface/projectInterface';
import { GitHub } from 'react-feather';
import projectVisual from "../../../../public/Desktop Screenshot 2023.08.21 - 15.09.15.74.png"

function Card({ resume, techno, title, link }: ProjectItem) {

    return (
        <>
            <div className="project__card">
                <img src={projectVisual} alt="project" className="project__image" />
                <div className="project__card-text">
                    <h2 className="project__card-title">{title}</h2>
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
            </div>
        </>
    )
}

export default Card