import React from "react";
import styles from "./what.module.scss";

const What = () => {
  return (
    <section id="what">
      <div className={["container", styles.what].join(" ")}>
        <div className={styles.top}>
          <h2>What is GPT-3</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className={styles.middle}>
          <h2>The possibilities are beyond your imagination</h2>
          <a href="#features">Explore The Library</a>
        </div>
        <ul className={styles.bottom}>
          <li>
            <h3>Chatbots</h3>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </li>
          <li>
            <h3>Knowledgebase</h3>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </li>
          <li>
            <h3>Education</h3>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default What;
