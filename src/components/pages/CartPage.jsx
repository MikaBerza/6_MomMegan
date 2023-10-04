import React from 'react';
import MainTitle from '../folderMainTitle/MainTitle';
import CartCard from '../folderCartCard/CartCard';
import OrderResult from '../folderOrderResult/OrderResult';
import ButtonGroup from '../folderButtonGroup/ButtonGroup';

//
function CartPage() {
  return (
    <>
      <MainTitle titleName='Корзина' />
      <CartCard />
      <CartCard />
      <OrderResult totalNumber={'3450'} amountNumber={'6900'} />
      <ButtonGroup />
    </>
  );
}

export default CartPage;
