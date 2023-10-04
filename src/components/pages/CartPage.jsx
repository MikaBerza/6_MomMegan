import React from 'react';
// import { Link } from 'react-router-dom';
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
      {/* <div className='cart__bottom'>
        <div className='cart__bottom-buttons'>
          <Link to='/'>
            <svg
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 13L1 6.93015L6.86175 1'
                stroke='#D3D3D3'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Вернуться назад</span>
          </Link>
          <div className='button pay-btn'>
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div> */}
      <ButtonGroup />
    </>
  );
}

export default CartPage;
