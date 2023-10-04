import React from 'react';
import style from './ProductCard.module.css';
import Button from '../folderButton/Button';
import { listOfSeasonTitles } from '../../assets/listsWithNames.js';

function ProductCard({ imageUrl, title, types, price, sizes }) {
  const [activeDough, setActiveDough] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className={style['card']}>
      <img className={style['card__image']} src={imageUrl} alt='product' />
      <h4 className={style['card__title']}>{title}</h4>
      <div className={style['card__selector']}>
        <ul className={style['card__list']}>
          {types.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveDough(index)}
                className={`${activeDough === index ? style.active : ''} ${
                  style['card__list-item']
                }`}
              >
                {listOfSeasonTitles[item]}
              </li>
            );
          })}
        </ul>
        <ul className={style['card__list']}>
          {sizes.map((size, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={`${activeSize === index ? style.active : ''} ${
                  style['card__list-item']
                }`}
              >
                {size}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style['card__footer']}>
        <div className={style['card__price']}>{price} ₽</div>
        <Button
          nameBtn={'Добавить'}
          nameStyle={['button_v1', 'button-icon_v1', 'button-name_v1']}
        />
      </div>
    </div>
  );
}

export default ProductCard;
