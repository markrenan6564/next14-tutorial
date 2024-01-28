import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const statistics = [
  {
    figure: "10 K+",
    description: "Year of Experince",
  },
  {
    figure: "234 K+",
    description: "People reached",
  },
  {
    figure: "5 K+",
    description: "Services and plugins",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.description}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas, flexibility and precision. We&apos;re
          world&apos;s Our Special Team best consulting & finance solution
          provider. Wide range of web and software development services.
        </p>
        <div className={styles.statistics}>
          {statistics.map((statistic) => (
            <div className={styles.stats} key={statistic.description}>
              <h1>{statistic.figure}</h1>
              <p>{statistic.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.img_container}>
        <Image
          src="/about.png"
          alt="About image"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
