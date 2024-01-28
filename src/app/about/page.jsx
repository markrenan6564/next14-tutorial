import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.img_container}>
        <Image src="/about.png" alt="About image" fill />
      </div>
    </div>
  );
};

export default AboutPage;
