import React from "react";
import styles from './profile.module.css'
import { ProfileNav } from "../Profile-nav/Profile-nav";


export function OrderList() {
  return (
    <section className={styles.section}>
      <ProfileNav />
      {'Пока ничего'}
    </section>
  );
}
