import React from "react";
import '../index.css';
function InputData({userInput,setUserInput,handleSubmit,setStatus}) {
  return (
    <>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button className={!!userInput ? 'show' : 'disable' }
         onClick={handleSubmit}>Add</button>
      </form>
      <select onChange={(e)=>setStatus(e.target.value)} name='todoList'>
          <option value='All'>All</option>
          <option value='Completed'>Completed</option>
          <option value='Incomplete'>Incomplete</option>
      </select>
    </>
  );
}

export default InputData;
