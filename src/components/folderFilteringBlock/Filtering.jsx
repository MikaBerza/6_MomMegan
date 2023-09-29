//
import React from 'react';
import { listOfFilteringItemNames } from '../../assets/listsWithNames';

function Filtering({ value, onClickFiltering }) {
  return (
    <div className='filtering'>
      <ul>
        {listOfFilteringItemNames.map((nameItem, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickFiltering(index)}
              className={value === index ? 'active' : ''}
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
