import { useState } from "react";

function Body() {
  
    const[val,setVal]=useState('');
    const[num,setNum]=useState(1);
  return (
    <div className="body">
        <div>
            <input onChange={(e)=>{
              setVal(e.target.value)
            }}></input>
        </div>
        <h3>{val}</h3>

        <button onClick={(e)=>{ setNum(num+num) }}> + </button>
        <button onClick={(e)=>{ setNum(num*num) }}> * </button>
        <button onClick={(e)=>{ setNum(num-num/2) }}> - </button>
        <h3>{num}</h3>
    </div>
  );
}

export default Body;
