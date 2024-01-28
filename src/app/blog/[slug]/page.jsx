import React from "react";
import styles from "./singlepost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.single_post_wrapper}>
      <div className={styles.image_wrapper}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1676203407503-84c4a5731590?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Some random image"
          fill
          className={styles.post_image}
        />
      </div>
      <div className={styles.post_wrapper}>
        <h2>Title</h2>
        <div className={styles.metadata_wrapper}>
          <div className={styles.avatar_wrapper}>
            <Image
              className={styles.avatar_image}
              src="/noavatar.png"
              alt="Default avatar"
              fill
            />
          </div>
          <div className={styles.metadata}>
            <span className={styles.metadata_title}>Author</span>
            <span className={styles.metadata_value}>Mark Renan</span>
          </div>
          <div className={styles.metadata}>
            <span className={styles.metadata_title}>Published</span>
            <span className={styles.metadata_value}>01-01-2024</span>
          </div>
        </div>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum
          facilis, sint consequuntur illo harum quisquam numquam laboriosam
          architecto porro fuga non expedita assumenda necessitatibus. Sapiente
          soluta officiis adipisci minima.
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
