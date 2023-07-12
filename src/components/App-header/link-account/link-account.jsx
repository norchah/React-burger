import React from "react";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./account.module.css";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LinkAccount(props) {
  const isAuth = useSelector(store => store.auth.isAuth);
  const { pathname } = useLocation();

  const path = isAuth ? '/profile' : '/login';

  const type = (pathname === "/profile" ||pathname === "/profile/logout" || pathname ==="/profile/orderList") ? "primary" : "secondary";
  const className =
    (pathname === "/profile" || pathname === "/profile/logout" || pathname ==="/profile/orderList")
      ? "text text_type_main-default pl-2"
      : "text text_type_main-default pl-2 text_color_inactive";

  return (
    <Link to={path} className={`${styles.link} pl-5 pr-5`}>
      <ProfileIcon type={type} />
      <p className={className}>
        {props.children}
      </p>
    </Link>
  );
}
