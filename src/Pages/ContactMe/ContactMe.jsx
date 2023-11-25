import React, { useEffect, useRef } from "react";
import "./ContactMe.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbarcontext } from "../../Context/Navbarcontext";
import emailjs from '@emailjs/browser';
function ContactMe() {
    const { navbarClick, navbarItem, setFalse } = React.useContext(Navbarcontext);
    const form = useRef();

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        setFalse();
        navbarClick(4);
    }, []);

    const [success, setSuccess] = React.useState(false); 
    console.log(success);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qnrvxov', 'template_y937msm', form.current, 'v22FpQraDdKxGxiGS')
            .then((result) => {
                setSuccess(true); 
                console.log(result.text);
                console.log("success");
                form.current.reset();
                
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contactMeWrapper" data-aos="zoom-in">
            <h1 className="contactText">Contact Me</h1>
            <form className="contactForm" onSubmit={sendEmail} ref={form}>
                <input className="Name" placeholder="name" name="from_name" />
                <input className="email" type="email" placeholder="Your Email" name="from_email" />
                <textarea className="messege" placeholder="Input your message" type="textarea" name="message" />
                <button className="submitButton">Submit</button>
            </form>
            {success && <h3 className="notification">Success!</h3>}
        </div>
    );
}

export default ContactMe