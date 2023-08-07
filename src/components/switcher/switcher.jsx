import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
import { useSelector, } from "react-redux";

export default function Switcher() {
  const current = useSelector((store) => store.switcher.currentTab);
//scrollInToView !!!
  return (
    <div className={style.container}>
      <Tab
        value="bun"
        active={current === "bun"}
        // onClick={() => handleSwitch("bun")}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={current === "sauce"}
        // onClick={() => handleSwitch("sauce")}
      >
        Соусы
      </Tab>
      <Tab
        value="main"
        active={current === "main"}
        // onClick={() => handleSwitch("main")}
      >
        Начинки
      </Tab>
    </div>
  );
}
