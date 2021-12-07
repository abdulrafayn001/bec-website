import { images } from "../../utils/images/images";
import ModalImage from "react-modal-image";
import styles from "./Home.module.scss";

export default function ImageGrid() {
  const rand = 1 + Math.random() * 99;
  const start = rand >= 50 ? 9 : 0;
  const end = rand >= 50 ? 21 : 12;
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <div className={styles.head} style={{ paddingTop: "30px" }}>
        <h2>Recent Activities</h2>
      </div>
      <div className={styles.grid}>
        {images.slice(start, end).map((img) => {
          return (
            <div
              key={img.src}
              className={styles.gridImage}
              style={{ display: "inline-block" }}
            >
              <ModalImage small={img.src} large={img.src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
