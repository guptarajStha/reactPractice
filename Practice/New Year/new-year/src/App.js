import {FaEnvelope} from 'react-icons/fa'
import Wish from './pages/Wish'
import React,{useState} from 'react'
function App() {
  const [check, setCheck] = useState(false)
  function handleCheck(){
    setCheck(!check)
  }
  return (
    <div>
      {!check ? <div className="App h-[100vh] w-[100vw] bg-red-400 flex justify-center items-center">
         <div className='flex w-1/2 h-1/2 text-center align-center justify-center text-white items-center text-[30vw]'>
           <FaEnvelope onClick={handleCheck} className='cursor-pointer '/>
         </div>
       </div>
       :
       <Wish />
     }
    </div>
  );
}

export default App;
