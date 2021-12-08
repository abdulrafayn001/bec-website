import styles from "./Events.module.scss";
import { events } from "../../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Structure() {
  return (
    <div>
      <div className={styles.structure}>
        <div>
          <h1 className={styles.head}>Events</h1>
          <div>
            {events.map((itm, index) => {
              return index % 2 == 0 ? (
                <div key={index}>
                  <div className={styles.section}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={itm.icons} size="10x" />
                    </div>
                    <div className={styles.body}>
                      <div className={styles.title}>{itm.title}</div>
                      <div>{itm.det}</div>
                    </div>
                  </div>
                  <div className={styles.line}>
                    <hr />
                  </div>
                </div>
              ) : (
                <div key={index}>
                  <div className={styles.section}>
                    <div className={styles.body}>
                      <div className={styles.title}>{itm.title}</div>
                      <div>{itm.det}</div>
                    </div>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={itm.icons} size="10x" />
                    </div>
                  </div>
                  <div className={styles.line}>
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
