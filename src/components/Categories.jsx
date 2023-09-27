//
import React from 'react';
import { nameCategories } from '../assets/nameCategories.js';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className='categories'>
      <ul>
        {nameCategories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
