import React , {useState} from 'react'
import './App.css';

function App() {
  const [temp, setTemp] = useState(10);
  const checkTemp= {background: temp>15?"red":"#1a5ba6"}
  function increment(){
    if (temp<30){

      setTemp(prev=>(prev+1))
    }
  }
  function decrement(){
    if(temp>0){
      setTemp(prev=>(prev-1))

    }
  }
  return (
    <div  className='mainDiv'>
      <div className="App">

        <div className='temperature' style={checkTemp} >{temp}°C</div>
        <div className='button'>
          <div><button onClick={increment} >+</button></div>
          <div><button onClick={decrement} >-</button></div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
