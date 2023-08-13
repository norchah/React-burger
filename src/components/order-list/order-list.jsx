import React from "react";
import style from "./order-list.module.css";
import OrderCard from "../order-list-card/order-list-card";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function FeedList() {
  const location = useLocation().pathname;

  const value = useSelector((store) => {
    let value;
    if (location === "/feed") {
      return (value = store.WS.feed);
    }
    if (location === "/profile/orderList") {
      return (value = store.WS.orderList);
    }
  });

  const data = value.orders;

  return (
    <ul className={`${style.section} p-6`}>
      {data &&
        data.map((item) => (
          <li key={item._id} className={`pl-4 pr-6 ${style.item}`}>
            <OrderCard item={item} />
          </li>
        ))}
    </ul>
  );
}
