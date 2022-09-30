import React from 'react'
import { useState } from 'react'


function Rightside(props) {
    const sumTime = props.time;
    const [breakTime, setBreakTime] = useState(0)

  return (
    <div>
        <div className='flex justify-around bg-gray-100	my-3'>
            <div>
                <div>75</div><div>Weight</div>
            </div>
            <div>
                <div>6.5</div><div>Heiht</div>
            </div>
            <div>
                <div>25</div><div>Age</div>
            </div>
        </div>
        <div className='flex justify-around bg-gray-100	my-3 py-3'>
            <button onClick={()=>setBreakTime(10)}>10m</button>
            <button onClick={()=>setBreakTime(20)}>20m</button>
            <button onClick={()=>setBreakTime(30)}>30m</button>
            <button onClick={()=>setBreakTime(40)}>40m</button>
            <button onClick={()=>setBreakTime(50)}>50m</button>
        </div>
        <div>
            <h2>Course Time: {sumTime}hr</h2>
            <h2>Break Time: {breakTime}m</h2>
        </div>
    </div>
  )
}

export default Rightside