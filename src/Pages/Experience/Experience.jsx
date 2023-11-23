import React from "react";
import { useEffect } from "react";
import { Navbarcontext } from "../../Context/Navbarcontext";

function Experience(){
    const {navbarClick, navbarItem, setFalse} = React.useContext(Navbarcontext)
    useEffect(() => {
        setFalse();
        navbarClick(3)
    },[])
    return(
        <div className="experienceWrapper">

        </div>
    )
}

export default Experience