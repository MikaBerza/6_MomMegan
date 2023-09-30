//
import React from 'react';
import style from './Filtering.module.css';
import { listOfFilteringItemNames } from '../../assets/listsWithNames';

function Filtering({ value, onClickFiltering }) {
  return (
    <div className={style['filtering']}>
      <ul className={style['filtering__list']}>
        {listOfFilteringItemNames.map((nameItem, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickFiltering(index)}
              className={`${value === index ? style.active : ''} ${
                style['filtering__list-item']
              }
              `}
            >
              {nameItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filtering;
