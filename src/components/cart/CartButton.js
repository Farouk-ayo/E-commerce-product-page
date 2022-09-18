import React, { useState } from "react";
import classes from "./CartButton.module.css";
import cartImage from "../../assets/images/icon-cartWhite.svg";

//adding button and subtract button in react

const CartButton = (props) => {
  const [number, setNumber] = useState(0);

  const addHandler = () => {
    setNumber(number + 1);
  };

  const subtractHandler = () => {
    if (number <= 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

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
          {number}
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
