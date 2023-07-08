import './App.css';
import React, { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'

function App() {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder='Search...'
       onChange={(event)=>{
         setsearchTerm(event.target.value)
       }} />
      {/* <div>{searchTerm}</div> */}
      {JSONDATA.filter(val => {
        if (searchTerm === "") {
          return val
        }
        else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map(value => {
        return (<div>{value.first_name}</div>)
      })}

    </div>
  );
}

export default App;
