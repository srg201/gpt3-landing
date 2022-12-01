import React from "react";
import styles from "./features.module.scss";

const Features = () => {
  return (
    <div id="features" className={styles.wrap}>
      <div className={["container", styles.features].join(" ")}>
        <div>
          <h2 className={[styles.title, "gradient__text"].join(' ')}>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <a className={styles.link} href="#">
            Request Early Access to Get Started
          </a>
        </div>
        <ul className={styles.list}>
          <li className={styles.listel}>
            <h3 className={styles.subtitle}>
              Improving end distrusts instantly
            </h3>
            <p>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded.
            </p>
          </li>
          <li className={styles.listel}>
            <h3 className={styles.subtitle}>Become the tended active</h3>
            <p>
              Considered sympathize ten uncommonly occasional assistance
              sufficient not. Letter of on become he tended active enable to.
            </p>
          </li>
          <li className={styles.listel}>
            <h3 className={styles.subtitle}>Message or am nothing</h3>
            <p>
              Led ask possible mistress relation elegance eat likewise debating.
              By message or am nothing amongst chiefly address.
            </p>
          </li>
          <li className={styles.listel}>
            <h3 className={styles.subtitle}>Really boy law county</h3>
            <p>
              Really boy law county she unable her sister. Feet you off its like
              like six. Among sex are leave law built now. In built table in an
              rapid blush.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
