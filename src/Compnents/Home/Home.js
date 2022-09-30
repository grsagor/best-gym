import React, { useEffect, useState } from 'react'
import Exercise from '../exercise/Exercise';
import Rightside from '../rightside/Rightside';

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
        <div className='grid grid-cols-4 grid-cols'>
            <div className='container col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5'>
                <div className='lg:col-span-3 md:col-span-2 sm:col-span-1 text-left flex items-center'>
                    <div><img className='w-16' src='https://i.ibb.co/RDmTmHq/gym-icon-vector-733107.jpg' alt=''></img></div>
                    <div className='text-xl font-bold'>Best Gym</div>
                </div>
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise = {exercise}
                        time = {{setSumTime,sumTime}}
                    ></Exercise>)
                }
            </div>
            <div>
                <Rightside
                    time = {sumTime}
                ></Rightside>
            </div>
        </div>
    </div>
  )
}

export default Home;