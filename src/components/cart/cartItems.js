import React, { useContext } from "react";
import classes from "./CartItems.module.css";
import cartContext from "../../stores/cartContext";
import delImg from "../../assets/images/icon-delete.svg";

const CartItems = (props) => {
  const cartCtx = useContext(cartContext);

 
  return (
    <div className={classes.CartItems}>
      <li className={classes.cartList}>
        <img className={classes.img} src={props.img} alt="" />
        <div className={classes.eachCart}>
          <p className={classes.txt}> {props.text}</p>
          <div className={classes.prices}>
            {cartCtx.num === +0 ? (
              <p>{props.price}</p>
            ) : (
              <p>
                {props.price} x {props.num}
              </p>
            )}
            <h6 className={classes.totalPrice}>${props.totalPrice}</h6>
          </div>
        </div>
        <img
          className={classes.delete}
          src={delImg}
          onClick={props.onClicked}
          alt=""
        />
      </li>
      <button className={classes.checkoutBtn}    onClick={props.onClosed}>Checkout</button>
    </div>
  );
};
export default CartItems;
