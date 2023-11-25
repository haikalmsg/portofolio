import { useEffect } from "react";
import React from "react";
import { Navbarcontext } from "../../Context/Navbarcontext";
import animoji from '../../Assets/pics/Animoji.png'
import "./Home.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import DB2 from '../../Project'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(){
    const [cards, setCards] = React.useState(DB2)
    const {navbarClick, navbarItem, setFalse} = React.useContext(Navbarcontext)
    useEffect(() => {
        setFalse()
        navbarClick(1)
    },[])
    useEffect(() => {
        AOS.init();
      }, [])
    const kartuProj = cards.map(card =>(
        <ProjectCard 
        data = {card}/>
    ))
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1290);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1290);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return(
        <div className="HomapageWrapper">
            <div className="homeWrapper">
                {isMobile ? (
                    <div className="imageWrapper" data-AOS = "fade-left">
                        <img className="myPhoto" src={animoji}></img>
                    </div>
                ) : null}
                <div className="introductionWrapper"  data-aos = "fade-right" data-aos-delay = "150" data-aos-duration = "1000">
                    <p className="homeText topText">Hello!</p>
                    <h1 className="homeText bodyText">I'm <strong>Haikal Ghiffari</strong> <br></br>A Junior Student Developer</h1>
                    <p className="homeText bottomBodyText bottom">Aspiring to excel in all that I undertake.</p>
                    <p className="homeText bottomText bottom">Get to know me better</p>
                    <div className="socialMediaWraper">
                        <a  className="socialMed ig button" href= "https://www.instagram.com/haikalmsg/"></a>
                        <a className="socialMed linkedin button" href="https://id.linkedin.com/in/haikal-muhammad-zahid-ghiffari-771806169"></a>
                        <a className="socialMed fb button" href="https://github.com/haikalmsg"></a>
                    </div>
                </div>
                {!isMobile ? (
                    <div className="imageWrapper" data-AOS = "fade-left">
                        <img className="myPhoto" src={animoji}></img>
                    </div>
                ) : null}
            </div>
            <h1 className="skillTitle" data-aos = "fade-up">Recent Projects</h1>
            <div className="menuProject" data-aos = "fade-up">

            </div>
            <hr></hr>
            <div className="ProjectWrapper">
                {kartuProj}
            </div>
        </div>
    )
}

export default Home