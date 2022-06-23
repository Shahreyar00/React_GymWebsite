import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="foot__container">
            <div className="foot_wrapper">
                <Link to="/">
                    <span className="footText">Fast Fitness</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer