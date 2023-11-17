import React from "react";
import './Navbar.css'

function Navbar(){
    

    return(
        <nav>
            <div className="navbarWrapper">
            <h1 className="navbarText">Portofolio</h1>
            <div className="navbarNavigation">
                <h1 className="navbarButton">Home</h1>
                <h1 className="navbarButton">Profile</h1>
                <h1 className="navbarButton">Experience</h1>
                <h1 className="navbarButton">Contact Me!</h1>
            </div>
        </div>
        <hr></hr>
        </nav>
    )
}

export default Navbar