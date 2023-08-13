import React from "react";
import styles from './profile.module.css'
import { ProfileNav } from "../Profile-nav/Profile-nav";
import OrderList from "../order-list/order-list"


export function ProfileOrderList() {
  return (
    <section className={styles.section}>
      <ProfileNav />
      <OrderList />
    </section>
  );
}
