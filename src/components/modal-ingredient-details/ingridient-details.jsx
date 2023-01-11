import React from "react";
import PropTypes from "prop-types";
import stylesDetails from "./details.module.css";

export default function IngredientDetails({ ingrData }) {
  const data = ingrData;
  return (
    <main className={stylesDetails.container}>
      <img src={data.image_large} alt={data.name} className={stylesDetails.image} />
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

IngredientDetails.propTypes = {  //так и не понял почему при использовании переменной появляется ошибка
  ingrData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }).isRequired,
};
