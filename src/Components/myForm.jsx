import { useState } from "react";

function Myform(){
  const[name, setName] = useState("");
  function handleChange(e){
    setName(e.target.value);
  }

   return(
    <div>
      <h2>Form input</h2>
      <form>
        <label htmlFor="">
          Enter your name:
          <input type="text" value={name} onChange={handleChange}/>
        </label>
        <p>Current value:{name}</p>
      </form>
   
   </div>
   )


}
export default Myform;