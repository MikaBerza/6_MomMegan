import React from 'react';
import Button from '../folderButton/Button';

import { useSelector } from 'react-redux';
import {
  setProductCounter,
  setPriceCounter,
  setCartData,
} from '../../redux/slices/cartOfProductsSlice';
import { useDispatch } from 'react-redux';

import { listOfSeasonTitles } from '../../assets/listsWithNames.js';
import style from './ProductCard.module.css';
import { v4 as uuidv4 } from 'uuid';

function ProductCard({
  imageUrl,
  title,
  types,
  sizes,
  price,
  rating,
  category,
}) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  /* используем хук useSelector из библиотеки Redux 
     для получения значений (productCounter, priceCounter, cartData) из состояния,
     с помощью селектора cartOfProductsSlice */
  const { productCounter, priceCounter, cartData } = useSelector(
    (state) => state.cartOfProductsSlice
  );
  const { filteringId } = useSelector(
    (state) => state.sortingAndFilteringSlice
  );

  const dispatch = useDispatch();

  // функция, добавить товар в корзину
  const addAnItemToTheCart = () => {
    // формируем, данные добавленного товара в корзину
    const dataOfTheAddedProduct = {
      id: uuidv4(),
      imageUrl: imageUrl,
      title: title,
      types: types[activeType],
      sizes: sizes[activeSize],
      price: price,
    };
    // копируем данные товара с помощью оператора spread
    const copyCartData = [...cartData];
    // обновляем данные в корзине
    copyCartData.push(dataOfTheAddedProduct);
    dispatch(setCartData(copyCartData));

    // записываем новые значения счетчиков в константы
    const updatedProductCounter = productCounter + 1;
    const updatePriceCounter = priceCounter + price;
    // обновляем значения счетчиков товаров и цен
    dispatch(setProductCounter(updatedProductCounter));
    dispatch(setPriceCounter(updatePriceCounter));
  };

  return (
    <div
      className={
        filteringId !== 0 && filteringId === category
          ? style['card']
          : filteringId === 0
          ? style['card']
          : 'hiding-elements'
      }
    >
      <img className={style['card__image']} src={imageUrl} alt='product' />
      <div className={style['card__title']}>
        <h4 className={style['card__title-text']}>{title}</h4>
        <svg
          className={style['card__title-stars']}
          width='30px'
          height='30px'
          viewBox='0 0 576 512'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z' />
        </svg>
        <span className={style['card__title-rating']}>{rating}</span>
      </div>
      <div className={style['card__selector']}>
        <ul className={style['card__list']}>
          {types.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveType(index)}
                className={`${activeType === index ? style.active : ''} ${
                  style['card__list-item']
                }`}
              >
                {listOfSeasonTitles[item]}
              </li>
            );
          })}
        </ul>
        <ul className={style['card__list']}>
          {sizes.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={`${activeSize === index ? style.active : ''} ${
                  style['card__list-item']
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style['card__footer']}>
        <div className={style['card__price']}>{price} ₽</div>
        <Button
          handleClick={addAnItemToTheCart}
          nameBtn={'Добавить'}
          nameStyle={['button_v1', 'button-icon_v1', 'button-name_v1']}
        />
      </div>
    </div>
  );
}

export default ProductCard;
