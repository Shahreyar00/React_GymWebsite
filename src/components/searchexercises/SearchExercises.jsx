import React, { useEffect, useState } from 'react';
import "./searchExercises.css";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollBar from '../hscrollbar/HorizontalScrollBar';



const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(()=>{
        const fetchExerciseData = async() =>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExerciseData();
    },[]);

    const handleSearch = async() =>{
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            setSearch("");
            setExercises(searchedExercises);
        }
    };

    return (
        <div className="se__container"  id="exercises">
            <div className="se__wrapper">
                <span className="se__title">
                    Awesome Exercises You <br /> Should Know
                </span>
                <div className="se__inputField">
                    <input 
                        type="text" 
                        value={search} 
                        onChange={(e)=>setSearch(e.target.value.toLowerCase())} 
                        placeholder="Search Exercises" 
                    />
                    <button className="se__searchBtn" onClick={handleSearch}>
                        Search 
                    </button>
                </div>
                <div className="horizontal__scrollbar">
                    <HorizontalScrollBar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
                </div>
            </div>
        </div>
    )
}

export default SearchExercises