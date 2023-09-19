import './Contact.scss'
import Letter from './Letter/Letter';
import Form from './Form/Form';

function Contact() {
    return (
        <section className="contact">
            <h2 className="contact__title">Contact</h2>
            <div className="contact__container">
                <Letter />
                <Form />
            </div>
        </section>

    )
}

export default Contact;