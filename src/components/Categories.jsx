//
import React from 'react';

function Categories({ value, listOfCategoryItemNames, onClickCategories }) {
  return (
    <div className='categories'>
      <ul>
        {listOfCategoryItemNames.map((nameItem, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategories(index)}
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

export default Categories;
