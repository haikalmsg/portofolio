import React, { useState, useEffect } from "react";
import './Navbar.css'
import Navitem from "./Navitems/Navitem";
import { Link } from "react-router-dom";


function Navbar(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1230);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return(
        <nav>
            <div className="navbarWrapper">
                <h1 className="navbarText">Portfolio</h1>
                <div className="navbarNavigation">
                    {!isSmallScreen && (
                        <Link to="/portofolio/"><Navitem id={1} name="Home" /></Link>
                    )}
                    {!isSmallScreen && (
                        <>
                            <Link to="/portofolio/Profile/"><Navitem id={2} name="Profile" /></Link>
                            <Link to="/portofolio/Experience/"><Navitem id={3} name="Experience" /></Link>
                            <Link to="/portofolio/ContactMe/"><Navitem id={4} name="Contact Me" /></Link>
                        </>
                    )}
                </div>
                {isSmallScreen && (
                    <div className="dropdownMenu">
                        <button className="dropdownButton" onClick={toggleDropdown}>
                            {isDropdownOpen ? <span>&#x25BC;</span> : <span>&#x25B2;</span>}
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdownContent">
                                <Link to="/Portofolio/"><Navitem id={1} name="Home" /></Link>
                                <Link to="/Portofolio/Profile/"><Navitem id={2} name="Profile" /></Link>
                                <Link to="/Portofolio/Experience/"><Navitem id={3} name="Experience" /></Link>
                                <Link to="/Portofolio/ContactMe/"><Navitem id={4} name="Contact Me" /></Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <hr></hr>
        </nav>
    )
}

export default Navbar