import Section from "./Section";
import List from "./List";
import styles from "./Join.module.scss";
import { experience, values, testimonials } from "../../utils/constant";
import Values from "./Values";
import { registration } from "../../utils/constant";
import Testimonials from "./Testimonials";

export default function Join() {
  return (
    <>
      <Section header={"The BEC Experience"} body={List} list={experience} />
      <Section
        background={"#1c1d54"}
        header={"Our Values"}
        headerColor={"#ffffff"}
        body={Values}
        list={values}
      />
      <Section
        header={"Application Form"}
        body={
          <a
            href={registration}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Click to open
          </a>
        }
        list={values}
      />
      <Section
        background={"#F0F0F0"}
        header={"Student Testimonials"}
        body={Testimonials}
        list={testimonials}
      />
    </>
  );
}
