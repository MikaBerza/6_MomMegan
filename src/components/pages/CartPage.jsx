import React from 'react';
import { useSelector } from 'react-redux';

import MainTitle from '../folderMainTitle/MainTitle';
import CartCard from '../folderCartCard/CartCard';
import OrderResult from '../folderOrderResult/OrderResult';
import ButtonGroup from '../folderButtonGroup/ButtonGroup';
import InsteadProduct from '../folderInsteadProduct/InsteadProduct';

import emptyCart from '../../assets/img/emptyCart.png';

function CartPage() {
  /* используем хук useSelector из библиотеки Redux 
     для получения значений (productCounter, priceCounter, cartData) из состояния,
     с помощью селектора cartOfProductsSlice */
  const { productCounter, cartData } = useSelector(
    (state) => state.cartOfProductsSlice
  );

  return productCounter > 0 ? (
    <>
      <MainTitle titleName='Корзина' />
      {cartData.map((obj) => {
        return <CartCard key={obj.id} {...obj} />;
      })}
      <OrderResult />
      <ButtonGroup />
    </>
  ) : (
    <>
      <MainTitle titleName='Ваша корзина пуста...' />
      <InsteadProduct img={emptyCart} />
      <ButtonGroup styleName={'hide-element'} />
    </>
  );
}

export default CartPage;
