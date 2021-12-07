import Aim from "./Aim";
import Vision from "./Vision";
import styles from "./About.module.scss";
import Offers from "./Offers";
export default function About() {
  return (
    <>
      <Vision />
      <Aim />
      <div className={styles.others}>
        <h1>
          Business Executive Club provides the platform to the audience where
        </h1>
        <br />
        <p>
          They can learn about business related activities, ideas and much more
          in fun and creative ways which can be games or competitions, a
          different approach that traditional lecturing techniques and stuff. We
          aim to enhance the business-related knowledge and learning of our
          audience for which we have a wide range of domains so that detailed
          delivery of each specific domain is provided in the interested domains
          to the audience. Events like interview stimulations, case study
          competitions, business related debates, brand war competition, open
          mic sessions, and much more are offered by the platform of business
          executive club. Members can participate in various intra-universities
          events and competitions through our platform as well which provides
          them a great opportunity to seek exposure and enhance their learning
          inside and outside the campus as well. We intend to on making your
          business learning easy and fun.
        </p>
      </div>
      <Offers />
    </>
  );
}
