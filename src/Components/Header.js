import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <ul>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} to={"/"}>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} to={"/Students"}>Students</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} to={"Contact"}>ContactUS</NavLink></li>
        </ul>
    </header>
  )
}

export default Header
