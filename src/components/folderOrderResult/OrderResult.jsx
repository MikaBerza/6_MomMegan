import React from 'react';
import style from './OrderResult.module.css';
//
function OrderResult({ totalNumber, amountNumber }) {
  return (
    <div className={style['wrapper']}>
      <p className={style['in-total']}>
        Всего: <b className={style['number']}>{totalNumber} шт.</b>
      </p>
      <p className={style['amount']}>
        Сумма: <b className={style['number']}>{amountNumber} ₽</b>
      </p>
    </div>
  );
}

export default OrderResult;
