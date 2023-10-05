import React from 'react';
import Button from '../folderButton/Button';
import style from './CartCard.module.css';
//
function CartCard() {
  return (
    <div className={style['wrapper']}>
      <div className={style['product']}>
        <div className={style['images']}>
          <img
            className={style['images-item']}
            src='https://storage.cloud.google.com/mommegan-c835e.appspot.com/1imgMen.png'
            alt='Product'
          />
        </div>
        <div className={style['info']}>
          <h3 className={style['title']}>Yeezy Boost</h3>
          <p className={style['description']}>летнии, 41</p>
        </div>
      </div>
      <div className={style['control-buttons']}>
        <div className={style['inner']}>
          <Button
            nameStyle={['button_v2', 'button-icon_v2', 'button-name_v2']}
          />
          <div className={style['text-count']}>
            <span className={style['text-count-item']}>2</span>
          </div>
          <Button
            nameStyle={['button_v2', 'button-icon', 'button-name_v2']}
          />
        </div>
        <div className={style['text-price']}>
          <span className={style['text-price-item']}>3450 ₽</span>
        </div>
        <div className={style['inner']}>
          <Button
            nameStyle={['button_v2', 'button-icon_v3', 'button-name_v2']}
          />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
