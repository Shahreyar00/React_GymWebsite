import React from 'react';
import "./bodyPart.css";
import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <div className="bp__container">
            <div 
                className={bodyPart===item?"thisItem bodyPart-card":"notThisItem bodyPart-card"}
                onClick={()=>{
                    setBodyPart(item);
                    window.scrollTo({ top: 1050, left: 100, behavior: 'smooth' });
                }}
            >
                <img src={Icon} alt="dumbell" className="bpImg" />
                <span className="itemName">{item}</span>
            </div>
        </div>
    )
}

export default BodyPart