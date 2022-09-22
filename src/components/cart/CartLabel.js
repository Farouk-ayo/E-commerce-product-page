import cartImage from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import classes from "./CartLabel.module.css";
import React, { useContext, useState } from "react";
import Cart from "./cart";
import cartContext from "../../stores/cartContext";

const CartLabel = (props) => {
  const cartCtx = useContext(cartContext);
  const [carts, openCarts] = useState(false);

  const showForm = () => {
    openCarts(true);

    if (carts === true) {
      openCarts(false);
    }
  };
  const deleteCart = () => {
    cartCtx.empty = null;
    console.log(cartCtx.empty);
    openCarts(false);
  };
  const closed = () => {
    openCarts(false);
  };

  return (
    <React.Fragment>
      <div className={classes.carts}>
        <div>
          <img src={cartImage} onClick={showForm} alt="cart" />
        </div>

        <img className={classes.img} src={avatar} alt="" />
      </div>
      {carts && <Cart deleteCarts={deleteCart} onClosed={closed} />}
    </React.Fragment>
  );
};

export default CartLabel;
