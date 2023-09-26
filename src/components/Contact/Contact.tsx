import './Contact.scss'
import Letter from './Letter/Letter';
import Form from './Form/Form';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function Contact() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log("!!!");
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section
            className="contact"
        >
            <motion.h2
                id='Contact'
                className="contact__title"
                variants={{
                    hidden: { opacity: 0, x: -500 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1.5, delay: 0.2 }}
            >CONTACT
            </motion.h2>
            <motion.div
                ref={ref}
                className="contact__container"
                variants={{
                    hidden: { opacity: 0, x: 500 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1.5, delay: 0.2 }}
            >
                <Letter />
                <Form />
            </motion.div>
        </section>

    )
}

export default Contact;