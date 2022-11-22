import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './switcher.module.css';

export default function Switcher() {
    const [current, setCurrent] = React.useState('one')
  return (
    <div className={styles.switcher} style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Three
      </Tab>
    </div>
  )
}