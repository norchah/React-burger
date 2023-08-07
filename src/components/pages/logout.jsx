import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileNav } from "../Profile-nav/Profile-nav";
import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../services/api/logout";

export function Logout() {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logout());
  };
  return (
    <section className={styles.section}>
      <ProfileNav />
      <div className={styles.container}>
        <Button onClick={onClick} htmlType="button" type="primary" size="small">
          {"Выйти"}
        </Button>
      </div>
    </section>
  );
}
