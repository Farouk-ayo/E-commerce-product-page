import ImageSlider from "./ImageSlider";
import classes from "./Main.module.css";
import MainText from "./MainText";
import { useContext } from "react";
import React from "react";
import cartContext from "../../stores/cartContext";

import ImgThumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import ImgThumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import ImgThumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import ImgThumb4 from "../../assets/images/image-product-4-thumbnail.jpg";

const Main = (props) => {
  const headerText = "Fall Limited Edition Sneakers";

  const cartctx = useContext(cartContext);

  const datas = {
    price: "$125.00",
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
    cartctx.calPrice = (number) => {
      return +number * +datas.price;
      // console.log(+number * +datas.price);
    };
    cartctx.title = datas.headerText;
    cartctx.empty = "yes";

    console.log(cartctx);
  };

  return (
    <React.Fragment>
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
