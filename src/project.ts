import GameOQuiz from "../public/Game'O'Quiz.png";
import GameOQuizMobile from "../public/Game'O'QuizMobile.png";
import PortFolio from "../public/PortFolio.png";
import PortFolioMobile from "../public/PortFolioMobile.png";

const projectData = [
    {
        id: 1,
        title: "Game'O'Quiz",
        image: GameOQuizMobile,
        imageDesktop: GameOQuiz,
        resume: "Game'O'Quiz is a website that compiles several quizzes, allowing users to complete them and obtain a score upon completion, Project carried out as part of the assessment for my web developer training",
        link: "https://github.com/O-clock-Quasar/projet-09-quiz-o-tron-front",
        techno: [
            {
                id: 1,
                name: "React",
                color: "#00CCFF"
            },
            {
                id: 2,
                name: "TypeScript",
                color: "#3178C6"
            },
            {
                id: 3,
                name: "Scss",
                color: "#C6538C"
            }
        ]
    }
    ,
    {
        id: 2,
        title: "Portfolio",
        image: PortFolioMobile,
        imageDesktop: PortFolio,
        resume: "Creating my portfolio allowed me to use the skills acquired during my education in a page that will help me showcase all of my projects.",
        link: "https://github.com/Thomas-Machinet/Portfolio",
        techno: [
            {
                id: 1,
                name: "React",
                color: "#00CCFF"
            },
            {
                id: 2,
                name: "TypeScript",
                color: "#3178C6"
            },
            {
                id: 3,
                name: "Scss",
                color: "#C6538C"
            }
        ]
    }

];

export default projectData;