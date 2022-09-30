import React from 'react'

function Question() {
  return (
    <div>
        <div>
            <p className='font-bold'>How does react work?</p>
            <p>
            React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
            </p>
        </div>
        <div>
            <p className='font-bold'>What are the differences between props and state?</p>
            <p>
            State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
            </p>
        </div>
        <div>
            <p className='font-bold'>Write down the uses of useEffect?</p>
            <p>Running on state change: validating input field
Running on state change: live filtering
Running on state change: trigger animation on new array value
Running on props change: update paragraph list on fetched API data update.</p>
        </div>
    </div>
  )
}

export default Question