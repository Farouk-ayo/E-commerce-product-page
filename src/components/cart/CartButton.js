import React from "react";
import classes from "./CartButton.module.css";
import cartImage from "../../assets/images/icon-cartWhite.svg";

const CartButton = () => {
  return (
    <div className={classes.cartDetails}>
      <div className={classes.amounts}>
        <div className={classes.amount}>
          <h3> $125.00</h3>
          <p>50%</p>
        </div>
        <p className={classes.discount}>$250.00</p>
      </div>
      <div className={classes.btnComp}>
        <button className={classes.btn}>
          <span className={classes.minus}>-</span>0
          <span className={classes.plus}>+</span>
        </button>
        <button className={classes.cartBtn}>
          <img src={cartImage} alt="" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartButton;
