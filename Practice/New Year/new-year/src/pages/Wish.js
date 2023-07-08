import React, { useRef,useEffect,useState } from 'react'
import Confetti from 'react-confetti'
import useFireWork from "react-use-firework";
import {FaEnvelopeOpen,FaEnvelope} from 'react-icons/fa'

const Wish = () => {
    const date= new Date()
    const [second,setSeconds] =useState()
    const ref = useRef(null);
    useFireWork(ref)
    useEffect(() => {
        const interval = setInterval(() => {
           setSeconds(date.getSeconds())
          },1000);
          return () => clearInterval(interval);
        }, [second]);

  return (
    <>
    {date.getFullYear()===2023 && date.getMonth()===0?
        <div
        ref={ref} 
        className='h-[100vh] w-[100vw] bg-red-400 flex justify-center items-center'>
            <Confetti className='h-full w-full' />
            <div className=' h-1/2 w-1/2 flex items-center justify-center flex-col'>
            <p className=' mb-5 font-extrabold text-[4vw] text-white'>HAPPY NEW YEAR 2023 </p> 
                <FaEnvelopeOpen  className='text-[20vw] text-white'/>
            </div>
            
        </div>
    :
    <div
    className='h-[100vh] w-[100vw] bg-red-400 flex justify-center items-center'>
        <div className=' h-1/2 w-[70%] flex items-center justify-center flex-col'>
        <p className=' mb-5 font-extrabold text-[7vw] text-white'>
            {23-date.getHours()}hr {60-date.getMinutes()}min {60-date.getSeconds()}sec</p> 
            <FaEnvelope  className='text-[20vw] text-white'/>
        
        </div>
        
    </div>
    }
    </>
  )
}

export default Wish