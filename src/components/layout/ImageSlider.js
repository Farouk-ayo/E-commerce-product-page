import ImgThumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import ImgThumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import ImgThumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import ImgThumb4 from "../../assets/images/image-product-4-thumbnail.jpg";
import ImgActive1 from "../../assets/images/image-product-1.jpg";
import ImgActive2 from "../../assets/images/image-product-2.jpg";
import ImgActive3 from "../../assets/images/image-product-3.jpg";
import ImgActive4 from "../../assets/images/image-product-4.jpg";
import classes from "./ImageSlider.module.css";
import { useState } from "react";
import React from "react";

const imagesItems = [
  {
    id: "1",
    key: "1",
    smallImg: ImgThumb1,
    largeImg: ImgActive1,
  },
  {
    id: "2",
    key: "2",
    smallImg: ImgThumb2,
    largeImg: ImgActive2,
  },
  {
    id: "3",
    key: "3",
    smallImg: ImgThumb3,
    largeImg: ImgActive3,
  },
  {
    id: "4",
    key: "4",
    smallImg: ImgThumb4,
    largeImg: ImgActive4,
  },
];

const ImageSlider = () => {
  const [theImg, setTheImg] = useState(1);

  const chosenImage1 = () => {
    setTheImg(imagesItems[0].id);
  };
  const chosenImage2 = () => {
    setTheImg(imagesItems[1].id);
  };
  const chosenImage3 = () => {
    setTheImg(imagesItems[2].id);
  };
  const chosenImage4 = () => {
    setTheImg(imagesItems[3].id);
  };
  return (
    <div className={classes.imgComponent}>
      {imagesItems.map(({ id, key, smallImg, largeImg }) => {
        return (
          <React.Fragment>
            {+theImg === +id ? (
              <img className={classes.big} src={largeImg} alt="" />
            ) : null}
          </React.Fragment>
        );
      })}
      <div className={classes.smallImages}>
        <img src={ImgThumb1} onClick={chosenImage1} alt="" />
        <img src={ImgThumb2} onClick={chosenImage2} alt="" />
        <img src={ImgThumb3} onClick={chosenImage3} alt="" />
        <img src={ImgThumb4} onClick={chosenImage4} alt="" />
      </div>
    </div>
  );
};

export default ImageSlider;
