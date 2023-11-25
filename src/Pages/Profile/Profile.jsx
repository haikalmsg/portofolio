import React, { useEffect, useState } from "react";
import './profile.css'
import profile from '../../Assets/pics/haikal.jpg'
import SkillCard from "../../Components/SkillCard/SkillCard";
import DB from "../../Skills"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbarcontext } from "../../Context/Navbarcontext";

function Profile() {
    const [cards, setCards] = useState(DB);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1268);
    const { navbarClick, navbarItem, setFalse } = React.useContext(Navbarcontext);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        setFalse();
        navbarClick(2);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const kartu = cards.map(card => (
        <SkillCard
            data={card} />
    ));
    // END: abpxx6d04wxr

    return (
        <div className="profileWrapper">
            <div className="haikalWrapper">
            {isSmallScreen && <img className="haikalPic" data-aos="fade-left" data-aos-duration="1000" src={profile}></img>}
                <div className="textWrapper" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="haikalName">I'm Haikal</h1>
                    <p className="haikalDesc">A passionate student and developer currently pursuing my education at Universitas Gadjah Mada, Known as a cheerful, innovative, talkative individual. Has a major interest in Machine Learning, Computer Vision, Databases, Web Development and Technology. Currently building HIMAKOM as their entrepreneurship staff. Experienced in many programming languages and many organization. Looking forward to a new experience and opportunities.</p>
                    <div className="resumeWrapper">
                        <a className="resumeButton button">📄 Resume</a>
                        <Link to="/portofolio/ContactMe" className="emailButton"><a>Let's Chat</a></Link>
                    </div>
                </div>
                {!isSmallScreen && <img className="haikalPic" data-aos="fade-left" data-aos-duration="1000" src={profile}></img>}

            </div>
            <h1 className="skillTitle" data-aos="fade-up">Skills</h1>
            <hr></hr>
            <div className="skillsWrapper" data-aos="fade-up" data-aos-duration="1000">
                {kartu}
            </div>
        </div>
    );
}

export default Profile;
