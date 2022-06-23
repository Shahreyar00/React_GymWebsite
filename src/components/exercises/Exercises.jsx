import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import Loader from "../loader/Loader";
import ExerciseCard from "../exercisecard/ExerciseCard";
import "./exercises.css";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
        
            setExercises(exercisesData);
        };
    
        fetchExercisesData();
    }, [bodyPart]);

    //pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };
  
    if (!currentExercises.length) return <Loader />;

    return (
        <div className="exe__container">
            <div className="exe__wrapper">
                <span className="exe__heading">Showing Results</span>
                <div className="curr__exercises">
                    {currentExercises.map((exercise,idx)=>(
                        <ExerciseCard key={idx} exercise={exercise}  />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Exercises