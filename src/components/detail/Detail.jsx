import React from 'react';
import "./detail.css";
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <div className="detail__container">
            <div className="detail__wrapper">
                <div className="detail__left">
                    <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
                </div>
                <div className="detail__right">
                    <div className="detail__name">{name}</div>
                    <div className="detail__desc">
                         Exercises keep you strong.{' '}
                        <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
                        of the best exercises to target your {target}. It will help you improve your 
                        mood and gain energy.
                    </div>
                    <div className="extraDetail">
                        {extraDetail.map((item)=>(
                            <div className="extraDetail-item">
                                <button className="edBtn">
                                    <img src={item.icon} alt={bodyPart} className="edBtn-img" />
                                </button>
                                <span className="extraDetail-name">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail