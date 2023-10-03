import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.love}`}
      >
        Love Back
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.business}`}>
        Business Luck
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.money}`}>
        Money Power
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.lotto}`}>
        Win Lottery
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.divorce}`}>
        Divorces
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.other}`}>
        Other Issues
      </Link>
    </div>
  );
};

export default MenuCategories;
