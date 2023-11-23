import React, {useEffect} from "react";
import "./ContactMe.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbarcontext } from "../../Context/Navbarcontext";

function ContactMe(){
    const {navbarClick, navbarItem, setFalse} = React.useContext(Navbarcontext)
    useEffect(() => {
        AOS.init();
      }, [])
    useEffect(() => {
        setFalse()
        navbarClick(4)
    },[])
    function handleSubmit(event){
        return(
            event.preventDefault()
        )
    }
    return(
        <div className="contactMeWrapper" data-aos = "zoom-in">
            <h1 className="contactText" >Contact Me</h1>
            <form className="contactForm" onSubmit={handleSubmit}>
                <input className="subject" placeholder="Subject"></input>
                <input className="email" type="email" placeholder="Your Email"></input>
                <textarea className="messege" placeholder="Input your messege" type="textarea"></textarea>
                <button className="submitButton">Submit</button>
            </form>


        </div>
    ) 
}

export default ContactMe