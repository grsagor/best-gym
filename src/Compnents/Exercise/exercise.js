import './Exercise.css'
function Exercise(props) {
  const {name, picture,time} = props.exercise;
  const {setSumTime, sumTime} = props.time
  // console.log(setTime);

  const handleClick = (time) =>{
    const newSum = sumTime + time
    setSumTime(newSum)
  }

  return (
        <div className='bg-gray-300	p-5 text-left	'>
          <img src={picture} alt=""></img>
          <h2>Name: {name}</h2>
          <p>Time: {time}</p>
          <p className='px-auto'><button className='bg-lime-500	px-10 rounded-lg' onClick={()=>handleClick(time)}>ADD</button></p>
        </div>
  );
};

export default Exercise;