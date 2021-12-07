import styles from "./Join.module.scss";
export default function Section(props: any) {
  return (
    <div
      className={styles.join}
      style={{
        height: `${props.height}`,
        backgroundColor: `${props.background}`,
      }}
    >
      <h1 style={{ color: props.headerColor }}>{props.header}</h1>

      {props.body && typeof props.body === "function" ? (
        <div>{<props.body list={props.list} />}</div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          {props.body}
        </div>
      )}
    </div>
  );
}
