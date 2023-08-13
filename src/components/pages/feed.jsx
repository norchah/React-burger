import React from "react";
import styles from "./feed.module.css";
import OrderList from "../order-list/order-list";
import FeedInfo from "../feed-info/feed-info";

export default function Feed() {

  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-large mr-10 pt-10 pl-5">
        Лента заказов
      </h2>
      <section className={`${styles.section} `}>
        <OrderList />
        <FeedInfo />
      </section>
    </div>
  );
}
