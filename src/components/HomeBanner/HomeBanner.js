import React from "react";
import styles from "./Homebanner.module.css";

const HomeBanner = () => {
  return (
    <div>
      <div className={styles.banner_section}>
        <h1 className={`text-center pt-5 ${styles.banner_title}`}>
          DISCOVER OUR PRODUCTS
        </h1>
        <p className={`text-center ${styles.banner_description}`}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <hr className="ps-5" />
    </div>
  );
};

export default HomeBanner;
