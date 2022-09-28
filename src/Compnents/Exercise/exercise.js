import React from 'react'

function Exercise(props) {
  return (
    <div>
        <h2>Name: {props.exercise.name}</h2>
    </div>
  );
};

export default Exercise;