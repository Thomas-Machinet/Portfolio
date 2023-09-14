import { ChangeEvent, useState } from 'react';
import './Contact.scss';

import Field from './Field/Field';



function Contact() {

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault()
        const formData = {
            email: emailValue
        }
    }

    const [emailValue, setEmailValue] = useState('')
    return (
        <section className="contact">
            <h2 className="contact__title">Contact</h2>
            <form action="post" className="contact__form" onSubmit={handleSubmit}>
                <Field
                    name="email"
                    type="email"
                    placeholder="Your email adress"
                    value={emailValue}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value)}
                />
            </form>
        </section>
    )
}

export default Contact;