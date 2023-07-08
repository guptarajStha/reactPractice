import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Login from './Login'
const Pages = () => {
    let location = useLocation()
  return (
    <div>
        <Routes Location ={location.pathname} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route  path='/products/category/:type' element={<Product />}/>
        </Routes>
    </div>
  )
}

export default Pages