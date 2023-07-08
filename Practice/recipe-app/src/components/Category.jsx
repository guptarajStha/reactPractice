import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import React from 'react'
import {NavLink,useLocation} from 'react-router-dom'


function Category() {
    const location = useLocation()
    

  return (
    <div className='nav flex flex-row justify-center mt-8 mb-8 ml-0 mr-0'>
        <NavLink to={'/cuisine/Italian'} className={`hover:bg-red-300 flex flex-col justify-center items-center mr-4  rounded-[50%] w-[6rem] h-[6rem] scale-[0.6] font-bold text-white ${location.pathname==='/cuisine/Italian'?"bg-red-300":"bg-red-600"}`} >
            <FaPizzaSlice />
            <h3>Italian</h3>
        </NavLink>
        <NavLink to={'/cuisine/American'} className= {`hover:bg-red-300 flex flex-col justify-center items-center mr-4  rounded-[50%] w-[6rem] h-[6rem] scale-[0.6] font-bold text-white ${location.pathname==='/cuisine/American'?"bg-red-300":"bg-red-600"}`} >
            <FaHamburger />
            <h3>American</h3>
        </NavLink>
        <NavLink to={'/cuisine/Thai'} className= {`hover:bg-red-300 flex flex-col justify-center items-center mr-4 rounded-[50%] w-[6rem] h-[6rem] scale-[0.6] font-bold text-white ${location.pathname==='/cuisine/Thai'?"bg-red-300":"bg-red-600"}`} >
            <GiNoodles />
            <h3>Thai</h3>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'} className= {`hover:bg-red-300 flex flex-col justify-center items-center mr-4 rounded-[50%] w-[6rem] h-[6rem] scale-[0.6] font-bold text-white ${location.pathname==='/cuisine/Japanese'?"bg-red-300":"bg-red-600"}`} >
            <GiChopsticks />
            <h3>Japanese</h3>
        </NavLink>
    </div>
  )
}

export default Category