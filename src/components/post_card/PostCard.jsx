import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.image_container}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1676203407503-84c4a5731590?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>This is a Title</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          numquam ducimus at!
        </p>
        <Link href="/blog/post" className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
