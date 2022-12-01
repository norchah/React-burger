import React from "react";
import Nav from "./nav/nav.jsx";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import ButtonAccount from "./button-account/button-account.jsx";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} pt-16 pb-16`}>
        <Nav />
        <Logo />
        <ButtonAccount>Личный кабинет</ButtonAccount>
      </div>
    </header>
  );
}
