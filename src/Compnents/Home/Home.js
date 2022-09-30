import React, { useEffect, useState } from 'react'
import Exercise from '../exercise/Exercise';

function Home() {
    const [exercises, setExercises] = useState([]);
    const [sumTime, setSumTime] =useState(0)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])

  return (
    <div className=''>
        <div className='bg-red-400'>
            <h1>Welcome to my exercises store</h1>
            <p>Sum Time: {sumTime }</p>
        </div>
    <div className='grid grid-cols-4'>
        <div className='container col-span-3 grid grid-cols-3 gap-5 p-5'>
            {
                exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise = {exercise}
                    time = {{setSumTime,sumTime}}
                ></Exercise>)
            }
        </div>
        <div>
            
        </div>
    </div>
    </div>
  )
}

export default Home;