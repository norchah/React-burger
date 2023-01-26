import React from "react";
import stylesDetails from "./details.module.css";
import { useSelector } from "react-redux";

export default function IngredientDetails() {
  const data = useSelector((store) => store.ingredientDetails.ingredientDetails);

  return (
    <main className={stylesDetails.container}>
      <img
        src={data.image_large}
        alt={data.name}
        className={stylesDetails.image}
      />
      <h2
        className={`${stylesDetails.title} text text_type_main-medium mt-4 mb-8`}
      >
        {data.name}
      </h2>
      <ul className={stylesDetails.list}>
        <li className="mr-5">
          <h3 className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </h3>
          <p
            className={`${stylesDetails.title} text text_type_digits-default text_color_inactive`}
          >
            {data.calories}
          </p>
        </li>
        <li className="mr-5">
          <h3 className="text text_type_main-default text_color_inactive">
            Белки,г
          </h3>
          <p
            className={`${stylesDetails.title} text text_type_digits-default text_color_inactive`}
          >
            {data.proteins}
          </p>
        </li>
        <li className="mr-5">
          <h3 className="text text_type_main-default text_color_inactive">
            Жиры,г
          </h3>
          <p
            className={`${stylesDetails.title} text text_type_digits-default text_color_inactive`}
          >
            {data.fat}
          </p>
        </li>
        <li>
          <h3 className="text text_type_main-default text_color_inactive">
            Углеводы,г
          </h3>
          <p
            className={`${stylesDetails.title} text text_type_digits-default text_color_inactive mb-15`}
          >
            {data.carbohydrates}
          </p>
        </li>
      </ul>
    </main>
  );
}
