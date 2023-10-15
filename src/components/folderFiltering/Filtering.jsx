import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilteringId } from '../../redux/slices/sortingAndFilteringSlice';

import { listOfFilteringItemNames } from '../../assets/listsWithNames';
import style from './Filtering.module.css';

function Filtering({ valueId }) {
  const { searchValue } = useSelector(
    (state) => state.sortingAndFilteringSlice
  );
  const dispatch = useDispatch();
  const onClickFiltering = (index) => {
    dispatch(setFilteringId(index));
  };

  return (
    <div className={style['container']}>
      <ul className={style['list']}>
        {listOfFilteringItemNames.map((nameItem, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickFiltering(index)}
              className={`${valueId === index ? style.active : ''} ${
                style['list-item']
              } ${
                searchValue.trim().length !== 0 && index !== 0
                  ? 'not-visible-element'
                  : ''
              }`}
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
