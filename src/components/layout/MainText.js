import CartButton from "../cart/CartButton";
import classes from "./MainText.module.css";

const MainText = () => {
  return (
    <div className={classes.text}>
      <p className={classes.oranged}>sneaker company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className={classes.texting}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <CartButton />
    </div>
  );
};

export default MainText;
