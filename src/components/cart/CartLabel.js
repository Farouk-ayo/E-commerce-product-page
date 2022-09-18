import cartImage from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import classes from "./CartLabel.module.css";
import React, { useState } from "react";
import Cart from "./cart";

const CartLabel = (props) => {
  const [carts, openCarts] = useState(false);

  const showForm = () => {
    openCarts(true);

    if (carts === true) {
      openCarts(false);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.carts}>
        <img src={cartImage} onClick={showForm} alt="cart" />
        <img className={classes.img} src={avatar} alt="" />
      </div>
      {carts && <Cart />}
    </React.Fragment>
  );
};

export default CartLabel;
