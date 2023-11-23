import React from "react";
import './SkillCard.css'

function SkillCard(props){
    const {name, img} = props.data
    return(
        <div className="skillCardWrapper">
            <img className="logoImg" src= {img}></img>
            <h1 className="langName">{name}</h1>
        </div>
    )
}
export default SkillCard
