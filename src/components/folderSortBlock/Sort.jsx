import React from 'react';
import style from './Sort.module.css';
import { listOfNamesOfSortingElements } from '../../assets/listsWithNames';

function Sort({ sortId, setSortId }) {
  const [open, setOpen] = React.useState(false);
  const searchItemName = listOfNamesOfSortingElements[sortId];

  const onClickSelectAnItem = (index) => {
    setSortId(index);
    setOpen(false);
  };

  return (
    <div className={style['sort']}>
      <div className={style['sort__label']}>
        <svg
          className={style['sort__img']}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <span className={style['sort__text-bold']}>Сортировка по:</span>
        <span
          className={style['sort__text-normal']}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {searchItemName}
        </span>
      </div>
      {open && (
        <div className={style['sort__popup']}>
          <ul className={style['sort__list']}>
            {listOfNamesOfSortingElements.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    onClickSelectAnItem(index);
                  }}
                  className={`${sortId === index ? style['active'] : ''} ${
                    style['sort__list-item']
                  }
                `}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;

/*
<div class='choice'>
  <div class='filtering'>
    <ul class='filtering__list'>
      <li class='filtering__list-item'></li>
    </ul>
  </div>

  <div class='sort'>
    <div class='sort__label'>
      <svg class='sort__img'></svg>
      <span class='sort__text-bold'></span>
      <span class='sort__text-normal'></span>
    </div>
    <div class='sort__popup'>
      <ul class='sort__list'>
        <li class='sort__list-item'></li>
      </ul>
    </div>
  </div>
</div>;
*/
