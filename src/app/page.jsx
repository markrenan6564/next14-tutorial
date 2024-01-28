import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ex
          impedit atque esse maxime alias quaerat.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brands" fill className={styles.brand} />
        </div>
      </div>

      <div className={styles.image_container}>
        <Image
          src="/hero.gif"
          alt="Hero Image"
          fill
          className={styles.hero_image}
        />
      </div>
    </div>
  );
};

export default Home;
