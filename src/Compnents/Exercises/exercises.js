import React from 'react'
import Exercise from '../Exercise/exercise';

function Exercises() {
    const exercises = [
        {id: 1, name: 'Sagor', price: 100},
        {id: 2, name: 'Nova', price: 200},
        {id: 3, name: 'Sagorika', price: 300},
        {id: 4, name: 'Lovo', price: 400},
        {id: 5, name: 'Moda', price: 500},
        {id: 6, name: 'Motki', price: 600},
    ];
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