import React from 'react'
import { Link } from 'react-router-dom';
import {RiShoppingCartFill,RiLoginCircleFill} from "react-icons/ri"
import {FaUserAlt} from "react-icons/fa"

const Header = ({isAuthenticated}) => {
  return (
    <nav>
        <div>
           <img src=" https://cdn-icons-png.flaticon.com/512/5977/5977578.png" alt="burger king icon" />
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart <RiShoppingCartFill/></Link>
            <Link to={isAuthenticated ? "/me": "/login"}>
                {isAuthenticated ? <FaUserAlt/> : <RiLoginCircleFill/>}
            </Link>
        </div>
    </nav>
  )
}
 
export default Header