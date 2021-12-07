import styles from "./Join.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Key } from "react";
export default function Values(props: any) {
  return (
    <div>
      <div className={styles.list}>
        {props.list &&
          props.list.map((itm: any, index: Key | null | undefined) => {
            return (
              <div key={index} className={styles.valuesContainer}>
                <div className={styles.icon}>
                  <FontAwesomeIcon
                    icon={itm.icon}
                    size="10x"
                    style={{ marginTop: "4rem" }}
                  />
                </div>
                <div>
                  <h4 className={styles.title}>{itm.title}</h4>
                  <div className={styles.body}>
                    <p>{itm.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
