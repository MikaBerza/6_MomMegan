import React from 'react';
import MainTitle from '../folderMainTitle/MainTitle';
import CartCard from '../folderCartCard/CartCard';
import OrderResult from '../folderOrderResult/OrderResult';
import ButtonGroup from '../folderButtonGroup/ButtonGroup';

import { useSelector } from 'react-redux';

function CartPage() {
  /* используем хук useSelector из библиотеки Redux 
     для получения значений (productCounter, priceCounter, cartData) из состояния,
     с помощью селектора cartOfProductsSlice */
  const { cartData } = useSelector((state) => state.cartOfProductsSlice);

  return (
    <>
      <MainTitle titleName='Корзина' />
      {cartData.map((obj) => {
        return <CartCard key={obj.id} {...obj} />;
      })}
      <OrderResult />
      <ButtonGroup />
    </>
  );
}

export default CartPage;
