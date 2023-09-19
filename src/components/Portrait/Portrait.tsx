import face from '../../../public/Design_sans_titre__1_-removebg-preview.png'
import faceDesktop from '../../../public/Design_sans_titre-removebg.png'
import CV from '../../../public/CV.pdf'
import { GitHub, Linkedin, Download } from 'react-feather';
import './Portrait.scss'

function Portrait() {
    return (
        <>
            <h2 className="title">WHO I'M I ?</h2>
            <section className="portrait">

                <img className="portrait__face" src={face} alt='face'></img>
                <img className="portrait__face-desktop" src={faceDesktop} alt='face'></img>
                <p className="portrait__resume"><span className="portrait__resume-intro">Hello there! I'm</span>
                    <span className="portrait__resume-name">Thomas Machinet</span>After training in the field of Web development, I gained numerous skills and knowledge through projects carried out in various programming languages.
                    Aware of the path ahead to enhance my skills, I am more motivated than ever to learn and improve.</p>
            </section>
            <div className="portrait__link">

                <a
                    href="https://www.linkedin.com/in/thomas-machinet-71201926a"
                    className="portrait__link-item"
                    target='_blank'>
                    <Linkedin color='#57c7f0'
                        size='30px' />
                    Linkedin
                </a>
                <a
                    href="https://github.com/Thomas-Machinet"
                    className="portrait__link-item"
                    target='_blank'>
                    <GitHub color='#57c7f0'
                        size='30px' />
                    GitHub
                </a>
                <a href={CV} className="portrait__link-item" download>
                    <Download color='#57c7f0'
                        size='30px' />CV</a>


            </div>
        </>

    )
}

export default Portrait;