import React from "react";
import {Navbarcontext} from "../../../Context/Navbarcontext";
import './Navitem.css'

function Navitem(props){
    let id = props.id
    const {navbarClick, navbarItem, setFalse} = React.useContext(Navbarcontext)
    let display = navbarItem[id]
    console.log(navbarItem)
    function handleClick(id){
        setFalse()
        navbarClick(id)
    }

    return(
        <div className="navItemWrapper">
            <h1 className="navbarButton" onClick={() => handleClick(id)}>{props.name}</h1>
           {display && <hr className="navbarUnderline"></hr>}
        </div>
    )
}

export default Navitem