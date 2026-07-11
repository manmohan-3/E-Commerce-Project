// SHIVAAAHHH
import { useState } from "react";
function NameInput(){
    const [type,settype]=useState("");
    return(<>
        <div>
            <form>
                <label>Enter name:</label>
                <input type="text" onChange={(prop)=>settype(prop.target.value)}/>
                <h2>you typed:{type}</h2>
            </form>
        </div>
    </>)
}
export default NameInput;