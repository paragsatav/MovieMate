import React from "react";
import Popular from "../../assets/popular.png"
import Toprated from "../../assets/toprated.jpeg"
import Upcoming from "../../assets/upcoming.jpeg"
import "./navbar.css";
import DarkMode from "../darkmode/darkmode";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CineCraze</h1>
            <div className="navLinks">
                <DarkMode/>
                <a href="#popular">Popular <img className="navIcon" src={Popular} alt="#"/></a>
                <a href="#top_rated">Top Rated <img className="navIcon" src={Toprated} alt="#"/></a>
                <a href="#upcoming">Upcoming <img className="navIcon" src={Upcoming} alt="#"/></a>
            </div>
        </nav>
    );
}

export default Navbar;