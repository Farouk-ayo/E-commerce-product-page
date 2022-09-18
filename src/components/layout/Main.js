import ImageSlider from "./ImageSlider";
import classes from "./Main.module.css";
import MainText from "./MainText";

import React from "react";

const Main = () => {
  return (
    <React.Fragment>
      <main className={classes.main}>
        <ImageSlider />
        <MainText />
      </main>
    </React.Fragment>
  );
};

export default Main;
