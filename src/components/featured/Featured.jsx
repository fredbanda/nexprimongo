/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Get help from him!</b> The people that got help from Dr Ngozo the powerful one.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Let me tell you about Dr Ngozo the powerful one.</h1>
          <p className={styles.postDesc}>
I was going through a tough period in my life before I went to Dr Ngozo. Everything was a mess but he helped with 
my finances. Now I just got pension and I haven/'t use. If you are facing issues please contact him and you will for yourself
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
