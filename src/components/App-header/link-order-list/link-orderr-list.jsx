import React from "react";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./link.module.css";
import {Link} from 'react-router-dom';

export default function LinkOrderList(props) {
  return (
    <Link className={`${styles.link} pl-5 pr-5`} to='/orderList'>
      <ListIcon type="secondary" />
      <p className="text text_type_main-default text_color_inactive pl-2">
        {props.children}
      </p>
    </Link>
  );
}
