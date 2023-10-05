import React from 'react';
import Search from '../folderSearch/Search';
import MainTitle from '../folderMainTitle/MainTitle';
import CartCard from '../folderCartCard/CartCard';
import OrderResult from '../folderOrderResult/OrderResult';
import ButtonGroup from '../folderButtonGroup/ButtonGroup';

//
function CartPage({ searchValue, setSearchValue }) {
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainTitle titleName='Корзина' />
      <CartCard />
      <CartCard />
      <OrderResult totalNumber={'3450'} amountNumber={'6900'} />
      <ButtonGroup />
    </>
  );
}

export default CartPage;
