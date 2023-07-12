import React from "react";
import styles from "./profile-nav.module.css";
import { NavLink, useLocation } from "react-router-dom";

export function ProfileNav() {
  const location = useLocation().pathname;
  const isActive = (active) => {
    if (active.isActive) {
      return `${styles.linkActive} text text_type_main-medium`;
    } else {
      return `${styles.link} text text_type_main-medium text_color_inactive`;
    }
  };

  return (
    <article className={styles.article}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/profile" end className={isActive}>
            Профиль
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/profile/orderList" className={isActive}>
            История заказов
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/profile/logout" className={isActive}>
            Выход
          </NavLink>
        </li>
      </ul>
      <p className={`${styles.description} text text_type_main-default text_color_inactive mt-20`}>
        {location === "/profile"
          ? "В этом разделе вы можете изменить свои персональные данные"
          : ""}
      </p>
    </article>
  );
}
