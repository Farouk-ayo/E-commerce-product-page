import React, { useState } from "react";
import classes from "./CartButton.module.css";
import cartImage from "../../assets/images/icon-cartWhite.svg";

const [number, setNumber] = useState();
const subtractHandler = () => {
  setNumber();
};

const CartButton = (props) => {
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
          <span className={classes.minus} onClick={subtractHandler}>
            -
          </span>
          0
          <span className={classes.plus} onClick={addHandler}>
            +
          </span>
        </button>
        <button className={classes.cartBtn} onClick={props.onClicked}>
          <img src={cartImage} alt="" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartButton;
