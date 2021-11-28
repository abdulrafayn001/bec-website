import styles from "./Home.module.scss";
import logoSVG from "../../utils/images/logo.png";
import Image from "next/image";
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutConatiner}>
        <h1>What is BEC?</h1>
        <p>
          Business Executive Club is aimed at empowering individuals regarding
          the corporate business dynamics and conducting informative industry
          meetup sessions to enhance the knowledge base of individuals and train
          them for professional business world. Business Executive Club has now
          four main divisions i.e. Marketing Division, HR Division, Finance
          Division and Technology Division and by working in different divisions
          students can learn different aspects of business world.
        </p>
      </div>
      <div className={styles.image}>
        <Image src={logoSVG} alt="Logo of BEC" width={400} height={400} />
      </div>
    </div>
  );
}
