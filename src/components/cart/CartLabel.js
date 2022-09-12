import cartImage from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import classes from './CartLabel.module.css'

const CartLabel = () => {
  return (
    <div className={classes.carts}>
      <img src={cartImage} alt="" />
      <img className={classes.img} src={avatar} alt="" />
    </div>
  );
};


export default CartLabel