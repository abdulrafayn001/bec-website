import styles from "./About.module.scss";
export default function Offers() {
  return (
    <div className={styles.vision}>
      <h1>BEC's Core Services</h1>
      <br />
      <div className={styles.offerList}>
        <div>Advisors</div>
        <div>Information Technology</div>
        <div>Marketing and Social Media</div>
        <div>HRM</div>
        <div>Finance</div>
        <div>Supply Chain</div>
      </div>
    </div>
  );
}
