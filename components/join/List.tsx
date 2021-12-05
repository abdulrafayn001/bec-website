import { Key } from "react";
import styles from "./Join.module.scss";
export default function List(props: any) {
  let num = 0;
  return (
    <div className={styles.list}>
      {props.list.map((itm: any, index: Key | null | undefined) => {
        return (
          <div key={index} className={styles.listContainer}>
            <div className={styles.circle}>{(num += 1)}</div>
            <div className={styles.bodyText}>
              <h3>{itm}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
