import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import totalStyles from './total.module.css'
import iconImagePath from '../images/icon-36x36.svg';

export default function Total() {
    return (
        <div className={totalStyles.total}>
            <div className={totalStyles.totalPrice}>
                <p className="text text_type_digits-medium">610</p>
                <img src={iconImagePath} alt='CurrencyIcon' style={{marginLeft: '8px'}}/>
            </div>
            <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
        </div>
    )
}