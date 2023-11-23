import { useEffect } from "react";
import React from "react";
import { Navbarcontext } from "../../Context/Navbarcontext";

function Home(){
    const {navbarClick, navbarItem, setFalse} = React.useContext(Navbarcontext)
    useEffect(() => {
        setFalse()
        navbarClick(1)
    },[])
    return(
        <div className="homeWrapper">
            <h1 className="test">Hello World</h1>

        </div>
    )
}

export default Home