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
          {/* <div className={style['button']}>
            <svg
              className={style['button-img_minus']}
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z' />
              <path d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z' />
            </svg>
          </div> */}
          <div className={style['text-count']}>
            <span className={style['text-count-item']}>2</span>
          </div>
          {/* <div className={style['button']}>
            <svg
              className={style['button-img_plus']}
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z' />
              <path d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z' />
            </svg>
          </div> */}
          <Button
            nameStyle={['button_v2', 'button-icon', 'button-name_v2']}
          />
        </div>
        <div className={style['text-price']}>
          <span className={style['text-price-item']}>3450 ₽</span>
        </div>
        <div className={style['inner']}>
          {/* <div className={style['button']}>
            <svg
              className={style['button-img_remove']}
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z' />
              <path d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z' />
            </svg>
          </div> */}
          <Button
            nameStyle={['button_v2', 'button-icon_v3', 'button-name_v2']}
          />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
