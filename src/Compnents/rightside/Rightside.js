import React from 'react'

function Rightside() {
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
            <div className='bg-white rounded-full p-2'>
                <div>10</div>
            </div>
            <div className='bg-white rounded-full p-2'>
                <div>20</div>
            </div>
            <div className='bg-white rounded-full p-2'>
                <div>30</div>
            </div>
            <div className='bg-white rounded-full p-2'>
                <div>40</div>
            </div>
            <div className='bg-white rounded-full p-2'>
                <div>50</div>
            </div>
        </div>
    </div>
  )
}

export default Rightside