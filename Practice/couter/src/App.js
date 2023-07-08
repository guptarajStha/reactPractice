import React,{useState} from 'react'
import './App.css';

function App() {
  const [count,setCout]= useState(0)
  function increasement(){
    setCout(prevVal=>prevVal+1)
  }
  function decreasement(){
    setCout(prevVal=>prevVal-1)
  }
  return (
    <div className="App">
      <button onClick={increasement} className='counter'>+</button>
      <span>{count}</span>
      <button onClick={decreasement} className='counter'>-</button>
     
    </div>
  );
}

export default App;
