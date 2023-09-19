import emailjs from '@emailjs/browser';
import './Form.scss';
import { useRef } from 'react';


function Form() {
    const template = import.meta.env.VITE_APP_TEMPLATE_ID;
    const service = import.meta.env.VITE_APP_SERVICE_ID;
    const key = import.meta.env.VITE_APP_PUBLIC_KEY;
    const form = useRef();

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm(service, template, form.current, key)
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                (e.target as HTMLFormElement).reset();
            }, (error) => {
                console.log(error.text)
            })
    }

    return (

        <form className='cf' ref={form} onSubmit={sendEmail}>
            <div className='half left cf'>
                <input type='text' placeholder='Name' name='user_name' />
                <input type='email' placeholder='Email address' name='user_email' />
            </div>
            <div className='half right cf'>
                <textarea name='message' placeholder='Message'></textarea>
            </div>
            <input type='submit' value='Send' id='input-submit' />
        </form>

    )
}

export default Form;