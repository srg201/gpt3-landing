import styles from "./header.module.scss";
import img from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <section id="home" className={styles.wrap}>
      <div className={[styles.header, "container"].join(" ")}>
        <div>
          <h1 className={["gradient__text", styles.title].join(' ')}>
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <span className={styles.descr}>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </span>
          <form className={styles.form} action="">
            <input type="text" placeholder="Your Email Address" />
            <button type="submit">Get Started</button>
          </form>
          <div className={styles.people}>
            <img src={people} alt="people" />
            <span>1,600 people requested access a visit in last 24 hours</span>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
