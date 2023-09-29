//
import React from 'react';

function Filtering({ value, listOfFilteringItemNames, onClickFiltering }) {
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
