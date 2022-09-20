import CartButton from "../cart/CartButton";
import classes from "./MainText.module.css";

const MainText = (props) => {
  return (
    <div className={classes.text}>
      <p className={classes.oranged}>sneaker company</p>
      <h1>{props.headerText}</h1>
      <p className={classes.texting}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <CartButton
        price={props.price}
        numbers={props.numbers}
        discount={props.discount}
        onClicked={props.onAddtoCart}
      />
    </div>
  );
};

export default MainText;
