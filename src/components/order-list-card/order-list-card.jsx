import React from "react";
import { useSelector } from "react-redux";
import styles from "./order-list-card.module.css";

export default function OrderCard({ item }) {
  const { ingr } = useSelector((store) => ({
    ingr: store.ingredients.ingredients,
  }));
  let i = [];
  item.ingredients.forEach((item) => {
    ingr.forEach((j, index) => {
      if (item === j._id) {
        i[index] = j;
      }
    });
  });

  return (
    <section className={`${styles.section} p-6 mb-4`}>
      <div className={`${styles.head_container} mb-4`}>
        <p className={`text text_type_digits-default`}>{`#${item.number}`}</p>
        <p className={`text text_type_main-default text_color_inactive`}>
          {item.updatedAt}
        </p>
      </div>
      <p className={`text text_type_main-medium mb-4`}>{item.name}</p>
      <div className={`${styles.images_container}`}>
        {i.map((item, index) => {
          return (
            <div key={index} className={`${styles.image_container}`}>
              <img
                className={`${styles.image} `}
                src={`${item.image_mobile}`}
                alt={`${item.name}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
