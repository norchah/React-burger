import React from "react";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./link.module.css";
import {useLocation, Link} from 'react-router-dom';


export default function LinkOrderList(props) {
  const { pathname } = useLocation();

  const type = (pathname === "/orderList") ? "primary" : "secondary";
  const className =
    (pathname === "/orderList")
      ? "text text_type_main-default pl-2"
      : "text text_type_main-default pl-2 text_color_inactive";



  return (
    <Link className={`${styles.link} pl-5 pr-5`} to='/orderList'>
      <ListIcon type={type} />
      <p className={className}>
        {props.children}
      </p>
    </Link>
  );
}
