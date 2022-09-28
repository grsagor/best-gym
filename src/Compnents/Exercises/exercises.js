import React, { useEffect, useState } from 'react'
import Exercise from '../Exercise/exercise';

function Exercises() {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])

  return (
    <div>
        <h1>Welcome to my exercises store</h1>
        {
            exercises.map(exercise => <Exercise
                key={exercise.id}
                exercise = {exercise}
            ></Exercise>)
        }
    </div>
  )
}

export default Exercises;