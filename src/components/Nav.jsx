import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/Home.png";
import projects from "../assets/Projects.png";
import contact from "../assets/Contact.png";

export default function Nav() {
    return (
        <nav className='page-navigation'>
            <ul>
                <li>
                    <Link to="/">
                        <img src={home} alt={home} />
                        <h4>Home</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/Projects">
                        <img src={projects} alt={projects} />
                        <h4>Projects</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/Contact">
                        <img src={contact} alt={contact} />
                        <h4>Contact</h4>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}