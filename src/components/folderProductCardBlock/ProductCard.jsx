import React from 'react';
import style from './ProductCard.module.css';
import { listOfSeasonTitles } from '../../assets/listsWithNames.js';

function ProductCard({ imageUrl, title, types, price, sizes }) {
  const [activeDough, setActiveDough] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className={style['product-card']}>
      <img
        className={style['product-card__image']}
        src={imageUrl}
        alt='product'
      />
      <h4 className={style['product-card__title']}>{title}</h4>
      <div className={style['product-card__selector']}>
        <ul className={style['product-card__list']}>
          {types.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveDough(index)}
                className={`${activeDough === index ? style.active : ''} ${
                  style['product-card__list-item']
                }`}
              >
                {listOfSeasonTitles[item]}
              </li>
            );
          })}
        </ul>
        <ul className={style['product-card__list']}>
          {sizes.map((size, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={`${activeSize === index ? style.active : ''} ${
                  style['product-card__list-item']
                }`}
              >
                {size}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style['product-card__footer']}>
        <div className={style['product-card__price']}>{price} ₽</div>
        <button className={style['product-card__button']}>
          <svg
            className={style['product-card__button-icon']}
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span className={style['product-card__button-name']}>Добавить</span>
          <span className={style['product-card__counter']}>0</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
