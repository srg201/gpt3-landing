import React from "react";
import styles from "./navbar.module.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className={styles.navbar}>
      <div className={[styles.wrap, "container"].join(" ")}>
        <a href="#features" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <ul className={styles.list}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#what">What is GPT?</a>
          </li>
          <li>
            <a href="#features">Open AI</a>
          </li>
          <li>
            <a href="#pos">Case Studies</a>
          </li>
          <li>
            <a href="#blog">Library</a>
          </li>
        </ul>
        <div>
          <a href="#features" className={styles.signin}>
            Sign in
          </a>
          <a href="#features" className={styles.signup}>
            Sign up
          </a>
        </div>
        {toggleMenu ? (
          <RiCloseLine
            className={styles.menu}
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className={styles.menu}
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className={styles.navAdaptive}>
            <ul className={styles.listAdaptive}>
              <li>
                <a onClick={() => setToggleMenu(false)} href="#home">Home</a>
              </li>
              <li>
                <a onClick={() => setToggleMenu(false)} href="#what">What is GPT?</a>
              </li>
              <li>
                <a onClick={() => setToggleMenu(false)} href="#features">Open AI</a>
              </li>
              <li>
                <a onClick={() => setToggleMenu(false)} href="#pos">Case Studies</a>
              </li>
              <li>
                <a onClick={() => setToggleMenu(false)} href="#blog">Library</a>
              </li>
            </ul>
            <div>
              <a onClick={() => setToggleMenu(false)} href="#features" className={styles.signinAd}>
                Sign in
              </a>
              <a onClick={() => setToggleMenu(false)} href="#features" className={styles.signupAd}>
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
