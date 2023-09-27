import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
// import mainImage from './Images/farmer.png'

const Navbar = () => {
  return (
    <>
    <nav>
        <Link to='/' className='title'>Farmer's Friend</Link>
      <ul>
        <li>
         <Link to='/home'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/news'>News</Link>
        </li>
      </ul>
      
    </nav>
    </>
  )
}

export default Navbar
