import './Exercise.css'
// import {addToDb} from '../../utilities/fakedb'
function Exercise(props) {
  const {name, picture,time, about} = props.exercise;
  const {setSumTime, sumTime} = props.time
  // console.log(setTime);

  const handleClick = (time) =>{
    const newSum = sumTime + time;
    setSumTime(newSum);
    // addToDb
  }

  return (
        <div className='bg-gray-300	p-5 text-left	'>

        <div>
        <img className='my-2' src={picture} alt=""></img>
          <h2 className='font-bold my-2'>Name: {name}</h2>
          <p className='my-2'>{about}</p>
          <p className='font-bold my-2'>Time: {time}</p>
          <p className='text-center'><button className='bg-lime-500	px-24 py-2 my-2 rounded-lg font-bold' onClick={()=>handleClick(time)}>ADD</button></p>
        </div>

        </div>
  );
};

export default Exercise;