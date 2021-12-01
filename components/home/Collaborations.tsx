import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { logos } from "../../utils/collabs/collabs";
import styles from "./Home.module.scss";

import Image from "next/image";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export default function Collaborations() {
  return (
    <div className={styles.collaborations}>
      <h1>Collaborations</h1>
      <div>
        <div className={styles.slider}>
          <Carousel responsive={responsive} infinite={true} ssr>
            {logos.map((img) => {
              return (
                <div className={styles.image} key={img.blurDataURL}>
                  <Image src={img} alt="" width={"300px"} height={"300px"} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
