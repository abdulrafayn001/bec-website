import styles from "./Join.module.scss";
import Image from "next/image";
import { Key } from "react";
export default function Testimonials(props: any) {
  return (
    <div className={styles.list} style={{ flexWrap: "wrap" }}>
      {props.list &&
        props.list.map((itm: any, index: Key | null | undefined) => {
          return (
            <div key={index} className={styles.testContainer}>
              <div>
                <Image
                  src={itm.photo}
                  width={220}
                  height={248}
                  className={styles.img}
                  alt=""
                ></Image>
                <strong style={{ display: "block" }}>{itm.name}</strong>
              </div>
              <div className={styles.text}>
                <p>{itm.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
