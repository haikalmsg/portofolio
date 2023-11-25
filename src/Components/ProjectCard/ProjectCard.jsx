import React, { useEffect } from "react";
import './ProjectCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCard(props){
    const {name, text, img, link} = props.data
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="projectCardWrapper">
            <img className="projectImg" src= {img} data-aos = "fade-right"></img>
            <div className="projectTextWrapper">
                <h1 className="projectTitle" data-aos = "fade-left" >{name}</h1>
                <h3 className="projectText" data-aos = "fade-left">{text}</h3>
                <a className="visitButton" href={link} data-aos = "fade-left">Visit Me!</a>
            </div>
        </div>
    )
}

export default ProjectCard