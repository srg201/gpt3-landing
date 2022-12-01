import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <div className={styles.top}>
          <h2 className={[styles.title, "gradient__text"].join(' ')}>
            Do you want to step in to the future before others
          </h2>
          <a href="#features">Request Early Access</a>
        </div>
        <div className={styles.bottom}>
          <small>© 2021 GPT-3. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
