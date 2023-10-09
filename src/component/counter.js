import React,{useState} from 'react'
import './counter.css'

function Count() {
  const [count, setCount] = useState(1);

  const addCount=()=>{
    setCount(count+1)
  }

  const minusCount = () => {
    setCount(count - 1);
  }
  return (
    <div className='count'>
      <button onClick={addCount}>+</button>
      <button >{count}</button>
      <button onClick={minusCount}>-</button>
    </div>
  );
}



export default Count;
