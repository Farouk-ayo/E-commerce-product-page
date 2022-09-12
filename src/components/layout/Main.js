import ImageSlider from "./ImageSlider";
import classes from "./Main.module.css";
import MainText from "./MainText";

const Main = () => {
  return (
    <main className={classes.main}>
      <ImageSlider />
      <MainText />
    </main>
  );
};

export default Main;
