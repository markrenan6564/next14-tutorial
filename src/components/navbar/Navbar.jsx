import React from "react";
import Links from "./Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Kram&apos;s</div>
      <Links />
    </div>
  );
};

export default Navbar;
