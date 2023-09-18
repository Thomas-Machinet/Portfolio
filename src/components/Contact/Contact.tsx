import emailjs from '@emailjs/browser';
import './Contact.scss';
import { useRef } from 'react';


function Contact() {

    const template = import.meta.env.VITE_APP_TEMPLATE_ID

    const service = import.meta.env.VITE_APP_SERVICE_ID

    const key = import.meta.env.VITE_APP_PUBLIC_KEY



    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(service, template, form.current, key)
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                e.target.reset();
            }, (error) => {
                console.log(error.text)
            })
    }



    return (
        <section className="contact">
            <h2 className="contact__title">Contact</h2>
            <form className='cf' ref={form} onSubmit={sendEmail}>
                <div className='half left cf'>
                    <input type='text' placeholder='Name' name='user_name' />
                    <input type='email' placeholder='Email address' name='user_email' />
                </div>
                <div className='half right cf'>
                    <textarea name='message' type='text' placeholder='Message'>
                    </textarea>
                </div>
                <input type='submit' value='Send' id='input-submit' />
            </form>

        </section>
    )
}

export default Contact;