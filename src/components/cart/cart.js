// import React, { useState } from "react";
import classes from "./cart.module.css";
// import CartProvider from "../../stores/cartProvider";

import { useContext } from "react";
import cartContext from "../../stores/cartContext";

import CartItems from "./cartItems";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  console.log(cartCtx);
  return (
    <section className={classes.cart}>
      <h1>Carts</h1>
      {cartCtx.num === +0 || cartCtx.empty === null ? (
        <div className={classes.cartLists}>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <CartItems
          img={cartCtx.img}
          text={cartCtx.title}
          price={cartCtx.price}
          num={cartCtx.num}
          totalPrice={cartCtx.calPrice}
          delete={cartCtx.deleteCart}
        />
      )}
    </section>
  );
};

export default Cart;
