import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { logos } from "../../utils/collabs/collabs";
import styles from "./Home.module.scss";
const responsive = {
  desktop: {
    breakpoint: { max: 200, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Collaborations() {
  return (
    <div className={styles.collaborations}>
      <h1>Collaborations</h1>
      <div>
        <div className={styles.slider}>
          <Carousel responsive={responsive}>
            {logos.map((img) => {
              return (
                <div className={styles.image}>
                  <img src={img} alt="" width={"200px"} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
