import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./link.module.css";
import { useLocation, Link } from "react-router-dom";

export default function LinkConstructor(props) {
  const { pathname } = useLocation();

  const type = pathname === "/" ? "primary" : "secondary";
  const className =
    pathname === "/"
      ? "text text_type_main-default pl-2"
      : "text text_type_main-default pl-2 text_color_inactive";

  return (
    <Link to="/" className={`${styles.link} pl-5 pr-5`}>
      <BurgerIcon type={type} />
      <p className={className}>{props.children}</p>
    </Link>
  );
}
