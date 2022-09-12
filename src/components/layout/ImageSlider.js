import ImgThumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import ImgThumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import ImgThumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import ImgThumb4 from "../../assets/images/image-product-4-thumbnail.jpg";
import Img1active from "../../assets/images/image-product-1.jpg";
// import Img2active from "../../assets/images/image-product-2.jpg";
// import Img3active from "../../assets/images/image-product-3.jpg";
// import Img4active from "../../assets/images/image-product-4.jpg";
import classes from "./ImageSlider.module.css";

const ImageSlider = () => {
  return (
    <div className={classes.imgComponent}>
      <img className={classes.big} src={Img1active} alt="" />
      <div className={classes.smallImages}>
        <img src={ImgThumb1} alt="" />
        <img src={ImgThumb2} alt="" />
        <img src={ImgThumb3} alt="" />
        <img src={ImgThumb4} alt="" />
      </div>
    </div>
  );
};

export default ImageSlider;
