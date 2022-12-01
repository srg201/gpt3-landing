import React from "react";
import styles from "./possibility.module.scss";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div id="pos">
      <div className={["container", styles.pos].join(' ')}>
        <img src={possibility} alt="" />
        <div>
          <span>Request Early Access to Get Started</span>
          <h2>The possibilities are beyond your imagination</h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a href="#features">Request Early Access to Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
