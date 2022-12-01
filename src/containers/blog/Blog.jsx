import React from "react";
import styles from "./blog.module.scss";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <section id="blog" className={styles.wrap}>
      <div className="container">
        <h2 className={[styles.title, "gradient__text"].join(' ')}>
          A lot is happening, We are blogging about it.
        </h2>
        <ul className={styles.list}>
          <li>
            <div>
              <img src={blog1} alt="" />
            </div>
            <div className={styles.item}>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <a href="#features">Read Full Article</a>
            </div>
          </li>
          <li>
            <div>
              <img src={blog2} alt="" />
            </div>
            <div className={styles.item}>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <a href="#features">Read Full Article</a>
            </div>
          </li>
          <li>
            <div>
              <img src={blog3} alt="" />
            </div>
            <div className={styles.item}>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <a href="#features">Read Full Article</a>
            </div>
          </li>
          <li>
            <div>
              <img src={blog4} alt="" />
            </div>
            <div className={styles.item}>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <a href="#features">Read Full Article</a>
            </div>
          </li>
          <li>
            <div>
              <img src={blog5} alt="" />
            </div>
            <div className={styles.item}>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
              <a href="#features">Read Full Article</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
