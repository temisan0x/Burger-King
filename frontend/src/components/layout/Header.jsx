import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartFill, RiLoginCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import "../../styles/header.scss";
import { motion } from "framer-motion";
import BurgerIcon from "../../assets/burger-icon.png"

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/">
          <img
            src={BurgerIcon}
            alt="burger king icon"
          />
        </Link>
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <RiShoppingCartFill />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUserAlt /> : <RiLoginCircleFill />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
