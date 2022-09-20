import React from "react";
import classes from "./Header.module.css";
import CartLabel from "../cart/CartLabel";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const eachItems = (
    <ul className={classes.link}>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );

  return (
    <header className={classes.header} >
      <div className={classes.nav}>
        <img src={logo} alt="" />
        {eachItems}
      </div>
      <CartLabel />
    </header>
  );
};

export default Header;
