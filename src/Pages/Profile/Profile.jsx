import React from "react";
import './profile.css'
import profile from '../../Assets/pics/haikal.jpg'
import SkillCard from "../../Components/SkillCard/SkillCard";

function Profile(){
    return(
        <div className="profileWrapper">
            <div className="haikalWrapper">
                <div className="textWrapper">
                    <h1 className="haikalName">I'm Haikal</h1>
                    <p className="haikalDesc">A passionate student and developer currently pursuing my education at Universitas Gadjah Mada, Known as a cheerful, innovative, talkative individual. Has a major interest in Machine Learning, Computer Vision, Databases, Web Development and Technology. Currently building HIMAKOM as their entrepreneurship staff. Experienced in many programming languages and many organization. Looking forward to a new experience and opportunities.</p>
                </div>
                <img className="haikalPic" src={profile}></img>
                
            </div>
            <h1 className="skillTitle">Skills</h1>
            <div className="skillsWrapper">
                <SkillCard />
                <SkillCard />


            </div>
        </div>
    )
}

export default Profile