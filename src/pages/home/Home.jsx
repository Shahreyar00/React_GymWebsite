import React, { useState } from 'react'
import { Exercises, HeroBanner, SearchExercises } from '../../components'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <div className="home__container">
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}  />
        </div>
    )
}

export default Home