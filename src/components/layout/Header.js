import React from "react";
import classes from "./Header.module.css";
import CartLabel from "../cart/CartLabel";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";

const Header = (props) => {
  const eachItems = (
    <ul className={classes.link}>
      <li>
        <a href="##">Collections</a>
      </li>
      <li>
        <a href="##">Men</a>
      </li>
      <li>
        <a href="##">Women</a>
      </li>
      <li>
        <a href="##">About</a>
      </li>
      <li>
        <a href="##">Contact</a>
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.nav}>
          <img src={menu} className={classes.menu} onClick={props.navbar} alt="" />
          <img src={logo} alt="" />
          {eachItems}
        </div>
        <CartLabel />
      </header>
    </React.Fragment>
  );
};

export default Header;
