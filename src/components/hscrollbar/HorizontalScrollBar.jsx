import React, { useContext } from 'react';
import "./hbar.css";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from '../bodypart/BodyPart';
import ExerciseCard from '../exercisecard/ExerciseCard';
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon  from "../../assets/icons/left-arrow.png";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return(
        <span onClick={()=>scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </span>
    );
};


const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return(
        <span onClick={()=>scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </span>
    )
};

const HorizontalScrollBar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
    return(
        <div className="hbar__container">
                <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    {data.map((item)=>(
                        <div 
                        className="box"
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        >
                            {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
                        </div>
                    ))}
                </ScrollMenu>
        </div>
    )
}

export default HorizontalScrollBar