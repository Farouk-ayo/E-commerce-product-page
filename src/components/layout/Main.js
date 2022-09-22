import ImageSlider from "./ImageSlider";
import classes from "./Main.module.css";
import MainText from "./MainText";
import { useContext, useState } from "react";
import React from "react";
import cartContext from "../../stores/cartContext";
import Header from "./Header";
import cross from "./../../assets/images/icon-close.svg";

const Main = (props) => {
  const headerText = "Fall Limited Edition Sneakers";

  const cartctx = useContext(cartContext);

  const datas = {
    price: "$125.00",
    priceAmount: 125.0,
    discount: "$250.00",
    headerText: headerText,
  };
  const amt = (img, key) => {
    cartctx.img = img;
    cartctx.id = key;
    console.log(img, key);
  };

  const onAddtoCart = (number) => {
    cartctx.price = datas.price;
    cartctx.discount = datas.discount;
    cartctx.num = number;

    cartctx.totalPrice = +number * datas.priceAmount;
    cartctx.title = datas.headerText;

    cartctx.empty = "yes";

    console.log(cartctx);
  };

  const [nav, setState] = useState("no");
  const setNav = () => {
    setState("yes");
  };
  const backdropRemove = () => {
    setState("no");
  };

  const sidebar = (
    <section className={classes.navbar}>
      <img
        src={cross}
        onClick={backdropRemove}
        className={classes.cross}
        alt=""
      />
      <ul className={classes.navLink}>
        <li>
          <a href="##">Collections</a>
        </li>
        <li>
          <a href="##">Men</a>
        </li>
        <li>
          <a href="##">Women</a>
        </li>
        <li>
          <a href="##">About</a>
        </li>
        <li>
          <a href="##">Contact</a>
        </li>
      </ul>
    </section>
  );

  return (
    <React.Fragment>
      {nav === "yes" ? sidebar : null}
      {nav === "yes" ? (
        <section
          className={classes.backdrop}
          onClick={backdropRemove}
        ></section>
      ) : null}
      <Header navbar={setNav} />
      <main className={classes.main}>
        <ImageSlider eachNumber={amt} />
        <MainText
          price={datas.price}
          numbers={datas.numbers}
          discount={datas.discount}
          onAddtoCart={onAddtoCart}
          headerText={datas.headerText}
        />
      </main>
    </React.Fragment>
  );
};

export default Main;
