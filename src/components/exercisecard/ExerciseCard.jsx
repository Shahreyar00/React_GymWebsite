import React from 'react';
import "./exerciseCard.css";
import { Link } from 'react-router-dom';
import "./exerciseCard.css";

const ExerciseCard = ({ exercise }) => {
    return (
        <div className="exercise__container">
            <Link to={`/exercise/${exercise.id}`}>
                <div className="exercise-card">
                    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                    <div className="exercise-row">
                        <button className="exercise-bodyPart">
                            {exercise.bodyPart}
                        </button>
                        <button className="exercise-bodyTarget">
                            {exercise.target}
                        </button>
                    </div>
                    <span className="exerciseName">
                        {exercise.name}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default ExerciseCard