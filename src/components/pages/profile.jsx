import React from "react";
import styles from "./profile.module.css";
import { ProfileNav } from "../Profile-nav/Profile-nav";
import { FormProfile } from "../form-profile/form-profile";

export default function Profile() {

  return (
    <section className={styles.section}>
      <ProfileNav />
      <FormProfile />
    </section>
  );
}
