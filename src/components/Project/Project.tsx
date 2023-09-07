import './Project.scss';
import Card from './Card/Card';

// Interface 
import { ProjectArray, ProjectItem } from '../../assets/Interface/projectInterface';

function Project({ data }: ProjectArray) {

    console.log(data);

    return (
        <>
            <h2 className="project__header">PROJECT</h2>
            <section className="project">
                {data.map((project: ProjectItem) => (
                    <Card key={project.id} {...project} />
                ))}
            </section>

        </>
    )
}

export default Project;