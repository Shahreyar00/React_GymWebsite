import React from 'react';
import "./herobanner.css";
import HeroBannerImage from "../../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <div className="hero__container">
            <div className="hero__left">
                <div className="hero__left-wrapper">
                    <span className="heroText0">Fitness Club</span>
                    <span className="heroText1">
                        Sweat, Smile <br/>
                        And Repeat 
                    </span>
                    <span className="heroText2">
                        Check out the most effective exercises personalized to you
                    </span>
                    <a href="#exercises">
                        <button className="heroText3">Explore Exercises</button>
                    </a>
                    <span className="heroText4">
                        Exercise
                    </span> 
                </div>
            </div>
            <div className="hero__right">
                <div className="hero-imgContainer">
                    <img src={HeroBannerImage } alt="HeroBannerImage " className="heroImg" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner