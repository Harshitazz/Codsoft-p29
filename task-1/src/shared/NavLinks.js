import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks =()=>{

    return <ul className="nav-links">
        <li>
            <NavLink  exact to="/"> HOME</NavLink>
        </li>
        <li>
            <NavLink  exact to="/about"> ABOUT</NavLink>
        </li>
        <li>
            <NavLink  exact to="/projects"> PROJECTS</NavLink>
        </li>
        
        <li>
            <NavLink  exact to="/contact"> CONTACT ME</NavLink>
        </li>
    </ul>
}
export default NavLinks;
