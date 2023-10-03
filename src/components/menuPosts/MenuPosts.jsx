import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.love}`}>Love Back</span>
          <h3 className={styles.postTitle}>
            Get the love of your heart back within 2 days with Dr Ngozo
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ngozo</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.business}`}>
            Business Power
          </span>
          <h3 className={styles.postTitle}>
            You can get your business that power from Dr Ngozo ask me how
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.money}`}>Money Luck</span>
          <h3 className={styles.postTitle}>
            Attract more money into your life from today
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Sandy</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
