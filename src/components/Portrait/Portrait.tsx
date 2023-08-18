import face from '../../assets/20230818_095300-removebg-preview.png'
import './Portrait.scss'

function Portrait() {
    return (
        <section className="portrait">
            <img className="portrait__face" src={face} alt='face'></img>
            <p className="portrait__resume"><span className="portrait__resume-intro">Hey there! I'm</span>
                <span className="portrait__resume-name">Thomas Machinet</span>After training in the field of Web development, I gained numerous skills and knowledge through projects carried out in various programming languages.
                Aware of the path ahead to enhance my skills, I am more motivated than ever to learn and improve.</p>
        </section>

    )
}

export default Portrait;