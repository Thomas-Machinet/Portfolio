import './Project.scss';
import project from "../../../public/Desktop Screenshot 2023.08.21 - 15.09.15.74.png"

function Project() {
    return (
        <>
            <h2 className="project__title">PROJECT</h2>
            <section className="project">
                <div className="project__item">
                    <a href="https://github.com/O-clock-Quasar/projet-09-quiz-o-tron-front"
                        className="project__link"
                        target='_blank'>
                        <h3 className="project__item-title">Game'O'Quiz</h3>
                        <img src={project} alt="project" className="project__item-image" />
                        <p className="project__item-resume">Game'O'Quiz is a website that compiles several quizzes, allowing users to complete them and obtain a score upon completion, Project carried out as part of the assessment for my web developer training</p>
                        <p className="project__item-techno">
                            <span className="project__item-techno-react">React</span>
                            <span className="project__item-techno-typescript">Typescript</span>
                            <span className="project__item-techno-redux">Redux</span>
                        </p>
                    </a>
                </div>
                <div className="project__item">
                    <a href="https://github.com/O-clock-Quasar/projet-09-quiz-o-tron-front"
                        className="project__link"
                        target='_blank'>
                        <h3 className="project__item-title">Game'O'Quiz</h3>
                        <img src={project} alt="project" className="project__item-image" />
                        <p className="project__item-resume">Game'O'Quiz is a website that compiles several quizzes, allowing users to complete them and obtain a score upon completion, Project carried out as part of the assessment for my web developer training</p>
                        <p className="project__item-techno">
                            <span className="project__item-techno-react">React</span>
                            <span className="project__item-techno-typescript">Typescript</span>
                            <span className="project__item-techno-redux">Redux</span>
                        </p>
                    </a>
                </div>

                <div className="project__item">
                    <a href="https://github.com/O-clock-Quasar/projet-09-quiz-o-tron-front"
                        className="project__link"
                        target='_blank'>
                        <h3 className="project__item-title">Game'O'Quiz</h3>
                        <img src={project} alt="project" className="project__item-image" />

                        <p className="project__item-resume">Game'O'Quiz is a website that compiles several quizzes, allowing users to complete them and obtain a score upon completion, Project carried out as part of the assessment for my web developer training</p>
                        <p className="project__item-techno">
                            <span className="project__item-techno-react">React</span>
                            <span className="project__item-techno-typescript">Typescript</span>
                            <span className="project__item-techno-redux">Redux</span>
                        </p>
                    </a>
                </div>


            </section>
        </>
    )
}

export default Project;