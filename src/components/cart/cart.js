import classes from "./cart.module.css";

const Cart = () => {
  // const allCarts=
  // <p>Your cart is empty</p>

  return (
    <section className={classes.cart}>
      <h1>Carts</h1>
      <div className={classes.cartLists}>
        <p>Your cart is empty</p>
      </div>
    </section>
  );
};

export default Cart;
