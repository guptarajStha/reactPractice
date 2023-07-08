import React from "react";
import {NavLink ,useLocation } from "react-router-dom";

const Nav = () => {
    let location =useLocation()
  return (
    <div className="flex flex-row p-6 relative bg-green-200 h-[10vh">
      <div className="ml-0 absolute left-0 right-auto top-0 flex text-center items-center h-[100%]">
        <NavLink to={"/"} className="cursor-pointer px-6 hover:bg-green-400  h-full items-center flex ">e-Commerce</NavLink>
        </div>
      <div className="flex absolute right-0 text-center items-center top-0 h-[100%]">
        <NavLink to={'/products/category/electronics'} className={`${location.pathname === "/products/category/electronics"?"bg-green-400 hover:bg-none":""} cursor-pointer px-7 hover:bg-green-300 h-full items-center flex`}>Electronics</NavLink>
        <NavLink to={'/products/category/jewelery'} className={`${location.pathname === "/products/category/jewelery"?"bg-green-400 hover:bg-none":""} cursor-pointer px-7 hover:bg-green-300 h-full items-center flex`}>Jewelery</NavLink>
        <NavLink to={'/products/category/men\'s%20clothing'} className={`${location.pathname === "/products/category/men's%20clothing"?"bg-green-400 hover:bg-none":""} cursor-pointer px-7 hover:bg-green-300 h-full items-center flex`}>Men's Clothing</NavLink>
        <NavLink to={'/products/category/women\'s%20clothing'} className={`${location.pathname === "/products/category/women's%20clothing"?"bg-green-400 hover:bg-none":""} cursor-pointer px-7 hover:bg-green-300 h-full items-center flex`}>Women's Clothing</NavLink>
      </div>
    </div>
  );
};

export default Nav;
