import React from "react";
import Links from "./Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Kram&apos;s
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
