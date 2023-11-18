import React from "react";
import './Navbar.css'
import Navitem from "./Navitems/Navitem";
import { Link } from "react-router-dom";

function Navbar(){
    

    return(
        <nav>
            <div className="navbarWrapper">
            <h1 className="navbarText">Portofolio</h1>
            <div className="navbarNavigation">
                <Link to = "/Portofolio/"><Navitem id ={1} name = "Home"/></Link>
                <Link to = "/Portofolio/Profile"><Navitem id ={2} name = "Profile"/></Link>
                <Link to = "/Portofolio/Experience"><Navitem id ={3} name = "Experience"/></Link>
                <Link to = "/Portofolio/ContactMe"><Navitem id ={4} name = "Contact Me"/></Link>
            </div>
        </div>
        <hr></hr>
        </nav>
    )
}

export default Navbar