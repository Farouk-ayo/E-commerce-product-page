import React from "react";
import classes from "./Header.module.css";
import CartLabel from "../cart/CartLabel";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <img src={logo} alt="" />
        <ul className={classes.link}>
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <CartLabel />
    </header>
  );
};

export default Header;
