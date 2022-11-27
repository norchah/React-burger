import React from "react";
import Nav from "../nav/nav";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import Account from "../header-account/header-account";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} pt-16 pb-16`}>
        <Nav />
        <Logo />
        <Account>Личный кабинет</Account>
      </div>
    </header>
  );
}
