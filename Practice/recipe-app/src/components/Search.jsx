import React,{useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("")
    const navigate =useNavigate()

    const handleInput=(event)=>{
        setInput(event.target.value)
    }
    const submitHandler =(event)=>{
        event.preventDefault()
        navigate('/searched/'+input)
    }
  return (
      <form className='' style={{margin:"0rem 20rem"}} onSubmit={submitHandler}>
        <div className=' w-full relative'>
            <FaSearch  className='text-white absolute translate-y-[120%] translate-x-3  '/>
         <input type="text" className='
         bg-red-400 
         border-none w-[100%] text-white px-[3rem] py-[1rem] outline-none rounded-[1rem]'
         value={input} 
         onChange={handleInput}/>
        </div>
    </form>
  );
}

export default Search;
