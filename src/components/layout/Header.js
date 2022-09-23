import React from "react";
import classes from "./Header.module.css";
import CartLabel from "../cart/CartLabel";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";

const Header = (props) => {
  const eachItems = (
    <ul className={classes.link}>
      <li>
        <a href="#id">Collections</a>
      </li>
      <li>
        <a href="#id">Men</a>
      </li>
      <li>
        <a href="#id">Women</a>
      </li>
      <li>
        <a href="#id">About</a>
      </li>
      <li>
        <a href="#id">Contact</a>
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.nav}>
          <img
            src={menu}
            className={classes.menu}
            onClick={props.navbar}
            alt=""
          />
          <img src={logo} alt="" />
          {eachItems}
        </div>
        <CartLabel oncartClosed={props.oncartClosed} />
      </header>
    </React.Fragment>
  );
};

export default Header;
