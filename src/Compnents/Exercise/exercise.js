import './Exercise.css'
function Exercise(props) {
  const {name, picture,time, about} = props.exercise;
  const {setSumTime, sumTime} = props.time
  // console.log(setTime);

  const handleClick = (time) =>{
    const newSum = sumTime + time
    setSumTime(newSum)
  }

  return (
        <div className='bg-gray-300	p-5 text-left	'>
          <img src={picture} alt=""></img>
          <h2 className='font-bold	'>Name: {name}</h2>
          <p>{about}</p>
          <p>Time: {time}</p>
          <p className='text-center'><button className='bg-lime-500	px-16 rounded-lg' onClick={()=>handleClick(time)}>ADD</button></p>
        </div>
  );
};

export default Exercise;