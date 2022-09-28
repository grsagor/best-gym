import React from 'react'

function Exercise(props) {
  const {name} = props.exercise;
  return (
    <div>
        <h2>Name: {name}</h2>
    </div>
  );
};

export default Exercise;