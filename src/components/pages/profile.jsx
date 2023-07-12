import React, {useEffect} from "react";
import styles from "./profile.module.css";
import { useSelector } from "react-redux";
import { ProfileNav } from "../Profile-nav/Profile-nav";
import { FormProfile } from "../form-profile/form-profile";
import { Navigate } from "react-router-dom";
import { getUser } from "../../services/api/get-user";

export default function Profile() {
  const { isAuth } = useSelector((store) => ({ isAuth: store.auth.isAuth }));
  console.log(isAuth);

  useEffect(() => {
    getUser();
    if(!isAuth) {
      Navigate("/login")
    }
  }, [isAuth]);

  return (
    <section className={styles.section}>
      <ProfileNav />
      <FormProfile />
    </section>
  );
}
