import React from "react";
import styles from "./brand.module.scss";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Brand = () => {
  return (
    <div className={styles.wrap}>
      <div className={["container", styles.brand].join(' ')}>
        <img src={google} alt="" />
        <img src={slack} alt="" />
        <img src={atlassian} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
      </div>
    </div>
  );
};

export default Brand;
