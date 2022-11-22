import React from "react";
import styles from './main.module.css';
import BurgerIngridients from "../burger-ingridients/burger-ingridients";

export default function Main(props) {
    return (
        <main className={styles.main}>
            <BurgerIngridients value={props.data}/>
        </main>
    )
}