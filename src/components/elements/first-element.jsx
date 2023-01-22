import React, { useEffect } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './list-elements.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { INCREASE_ITEM } from '../../services/actions/burger-ingredients';



export default function FirstElement(props) {
    const item = props.value[0];
    const dispatch = useDispatch();
    const bun = useSelector(store => store.start.bun);

    useEffect(() => {
        dispatch({
          type: INCREASE_ITEM,
          _id: bun._id,
        });
      }, [dispatch]);

    
    return (
      <li key={item._id} className={styles.item}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${item.name} (верх)`}
          price={item.price}
          thumbnail={item.image}
        />
      </li>
    );
  }
