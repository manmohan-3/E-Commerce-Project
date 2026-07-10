import { useState } from "react";

function Counter(){
    const [Count,setCount]=useState(0);
    return(<>
        <div>
            
            <h2>{Count}</h2>
            <button onClick={()=>setCount(Count+1)}>Increase</button>
            <button onClick={()=>setCount(Count-1)}>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    </>)
}
export default Counter;