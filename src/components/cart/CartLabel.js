import cartImage from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import classes from "./CartLabel.module.css";
import React from "react";

const CartLabel = (props) => {
  return (
    <React.Fragment>
      <div className={classes.carts}>
        <img src={cartImage} alt="cart" />
        <img className={classes.img} src={avatar} alt="" />
      </div>
    </React.Fragment>
  );
};

export default CartLabel;
