import { divisions } from "../../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Team.module.scss";
export default function Divisions() {
  return (
    <div className={styles.divisions}>
      <div className={styles.heading}>
        <h1>Our Divisions</h1>
      </div>
      <div>
        {divisions.map((itm, index) => {
          return index % 2 === 0 ? (
            <div key={index}>
              <div className={styles.divisionsContainer}>
                <div>
                  <FontAwesomeIcon
                    className={styles.divisionsImg}
                    icon={itm.icon}
                    size="10x"
                  />
                </div>
                <div className={styles.divisionsDet}>
                  <div>
                    <h3 className={styles.name}>{itm.name}</h3>
                    <p>{itm.description}</p>
                  </div>
                </div>
              </div>
              {index + 1 != divisions.length && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem 0",
                  }}
                >
                  <hr className={styles.break} />
                </div>
              )}
            </div>
          ) : (
            <div key={index}>
              <div className={styles.divisionsContainer}>
                <div className={styles.divisionsDet}>
                  <div>
                    <h3 className={styles.name}>{itm.name}</h3>
                    <p>{itm.description}</p>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    className={styles.divisionsImg}
                    icon={itm.icon}
                    size="10x"
                  />
                </div>
              </div>
              {index + 1 != divisions.length && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem 0",
                  }}
                >
                  <hr className={styles.break} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
