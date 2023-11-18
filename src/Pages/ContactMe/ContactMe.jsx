import React from "react";
import "./ContactMe.css"

function ContactMe(){

    function handleSubmit(event){
        return(
            event.preventDefault()
        )
    }
    return(
        <div className="contactMeWrapper">
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