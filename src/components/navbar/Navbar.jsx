import React from 'react';
import "./navbar.css";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav__container">
            <div className="nav__wrapper">
                <Link to="/">                 
                    <div className="nav__imgContainer">
                        <img src={Logo} alt="logo" className="navImg" />
                    </div>
                </Link>
                <Link to="/">
                    <span className="navText active">Home</span>
                </Link>
                <a href="#exercises">
                    <span className="navText">Exercises</span>
                </a>
            </div>
        </div>
    )
}

export default Navbar