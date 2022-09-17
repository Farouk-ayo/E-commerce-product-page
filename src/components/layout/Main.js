import ImageSlider from "./ImageSlider";
import classes from "./Main.module.css";
import MainText from "./MainText";
import Cart from "../cart/cart";
import React from "react";

const Main = () => {
  return (
    <React.Fragment>
      <Cart />
      <main className={classes.main}>
        <ImageSlider />
        <MainText />
      </main>
    </React.Fragment>
  );
};

export default Main;
