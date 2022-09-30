import React from 'react'
import { useState } from 'react'

function Rightside(props) {
    const sumTime = props.time;
    const [breakTime, setBreakTime] = useState(localStorage.getItem("afterRefresh"))

    // useEffect(() => {
    //     const storedBreakTime = getStoredBreakTime();
    //     console.log(storedBreakTime);
    // }, [])

    const handleBreak = (breakTime) => {
        setBreakTime(breakTime);
        // addToDb(breakTime);
        localStorage.setItem("afterRefresh", breakTime);

    }

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
            <button onClick={()=>handleBreak(10)}>10</button>
            <button onClick={()=>handleBreak(20)}>20</button>
            <button onClick={()=>handleBreak(30)}>30</button>
            <button onClick={()=>handleBreak(40)}>40</button>
            <button onClick={()=>handleBreak(50)}>50</button>
        </div>
        <div>
            <h2>Course Time: {sumTime}</h2>
            <h2>Break Time: {breakTime}</h2>
        </div>
    </div>
  )
}

export default Rightside