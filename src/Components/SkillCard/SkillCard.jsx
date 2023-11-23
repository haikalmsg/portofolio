import React from "react";
import './SkillCard.css'
import piton from '../../Assets/pics/python.png'

function SkillCard(props){
    
    return(
        <div className="skillCardWrapper">
            <img className="logoImg" src= {piton}></img>
            <h1 className="langName">Python</h1>
        </div>
    )
}
export default SkillCard
