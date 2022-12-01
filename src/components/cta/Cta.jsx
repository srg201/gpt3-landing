import React from "react";
import styles from "./cta.module.scss";

const Cta = () => {
  return (
    <div className={styles.wrap}>
      <div className={["container", styles.cta].join(' ')}>
        <div>
          <span>Request Early Access to Get Started</span>
          <p>Register today & start exploring the endless possiblities.</p>
        </div>
        <a href="#start">Get Started</a>
      </div>
    </div>
  );
};

export default Cta;
