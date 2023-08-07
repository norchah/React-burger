import React from "react";
import notFound from "../../images/notFound.svg";
import styles from "./not-found.module.css";

export function NotFound() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={notFound} alt={"page not found"} />
      <p className="text text_type_digits-large">sorry, no burgers here</p>
    </div>
  );
}
