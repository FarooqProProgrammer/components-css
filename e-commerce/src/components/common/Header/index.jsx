import React from 'react'
import "./index.css"
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='Header'>
            <img src={Logo} alt="" />

        <ul >
            <li><Link>Home</Link></li>
            <li><Link>Products</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Services</Link></li>
        </ul>

    </div>
  )
}

export default Header