import React, { createContext } from "react";


export const Navbarcontext = createContext(null)

export const NavbarContextProvider = (props) => {
    const [navbarItem, setNavbarItem] = React.useState({
        1 : true,
        2 : false,
        3 : false,
        4 : false
    })

    function navbarClick(itemID){
        return(
            setNavbarItem((prev) => ({...prev, [itemID] : !prev[itemID]}))
        )
    }
    function setFalse(){
        return(
            setNavbarItem((prev) => ({1 : false, 2 : false, 3 : false, 4 : false}))
        )
    }

    const contextValue = {navbarItem, navbarClick, setFalse}
    return <Navbarcontext.Provider value = {contextValue}>{props.children}</Navbarcontext.Provider>
}