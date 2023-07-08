import React ,{useState} from 'react'
import  { MenuItems }  from './MenuItems'
import {FaReact} from 'react-icons/fa'
import "./Navbar.css"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  function handleClick(){
    setClicked(prev=>!prev)
  }
  return (
    <nav className='NavbarItems'>
      
      <div className='navbar-logo'>
        <h1 >React<FaReact className='logo'/></h1>
      </div>
        <div className='menu-icon' onClick={handleClick}>
            {clicked?<AiOutlineClose />:<AiOutlineMenu />}
        </div>
        <ul className={clicked?'nav-menu-active':'nav-menu'}>
          {MenuItems.map((item)=>{
            return(
              <li>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
              )
          })}
        </ul>
      <button>Sign up</button>
    </nav>
  )
}

export default Navbar
