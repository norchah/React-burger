import React from "react";
import styles from "./feed-info.module.css";
import {useSelector} from 'react-redux';

export default function FeedInfo() {
  const {data} = useSelector(store => ({
    data: store.WS.feed,
  })) 

  console.log(data)
  return (
    <section className={`${styles.section} ml-15`}>
      <div className={styles.table}>
      <ul className={styles.list}>
        <h4 className={'text text_type_main-medium mb-6'}>В работе:</h4>
        <li className={`${styles.color} text text_type_digits-default mb-2`}>345345</li>
        <li className={`${styles.color} text text_type_digits-default mb-2`}>345345</li>
        <li className={`${styles.color} text text_type_digits-default mb-2`}>345345</li>
        <li className={`${styles.color} text text_type_digits-default mb-2`}>345345</li>
      </ul>

      <ul className={styles.list}>
      <h4 className={'text text_type_main-medium mb-6'}>Готовы:</h4>
        <li className={"text text_type_digits-default mb-2"}>4566456456</li>
        <li className={"text text_type_digits-default mb-2"}>4566456456</li>
        <li className={"text text_type_digits-default mb-2"}>4566456456</li>
        <li className={"text text_type_digits-default mb-2"}>4566456456</li>
      </ul>
      </div>
      
      <h4 className={'text text_type_main-medium mt-15'}>Выполнено за все время:</h4>
      <p className={'text text_type_digits-large'}>{data.total}</p>
      <h4 className={'text text_type_main-medium mt-15'}>Выполнено за сегодня:</h4>
      <p className={'text text_type_digits-large'}>{data.totalToday}</p>
    </section>
  );
}
