import React from 'react';
import { HorizontalScrollBar, Loader } from "../../components";
import "./similarExercises.css";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <div className="similarExercise__container">
            <div className="similarExercise__wrapper">
                <div className="similarExercise__title">
                    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
                </div>
                <div className="similarExercise__scroll">
                    {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
                </div>
                <div className="similarExercise__title">
                    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
                </div>
                <div className="similarExercise__scroll">
                    {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
                </div>
            </div>
        </div>
    )
}

export default SimilarExercises