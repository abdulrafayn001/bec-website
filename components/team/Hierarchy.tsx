import styles from "./Team.module.scss";
import { hierarchy } from "../../utils/images/hierarchy/hierarchy";
import ModalImage from "react-modal-image";

export default function Hierarchy() {
  return (
    <div className={styles.hierarchy}>
      <div className={styles.head} style={{ paddingTop: "30px" }}>
        <h2>Hierarchy</h2>
      </div>
      <div className={styles.grid}>
        {hierarchy.map((itm) => {
          return (
            <div
              style={{ display: "inline-block" }}
              className={styles.hierarchyContainer}
            >
              <div key={itm.image.src} className={styles.gridImage}>
                <ModalImage
                  small={itm.image.src}
                  large={itm.image.src}
                  alt=""
                />
              </div>
              <div>
                <h4>{itm.designation}</h4>
              </div>
              <h6>{itm.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
