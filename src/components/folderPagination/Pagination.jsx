import React from 'react';
import style from './Pagination.module.css';

import { getAnArrayWithPageNumbers } from '../../modules/modules';
//
function Pagination({
  initialProductData,
  numberOfCardsPerPage,
  valueCurrentId,
  onClickGoToPage,
}) {
  // массив номеров страниц
  const arrayOfPageNumbers = getAnArrayWithPageNumbers(
    initialProductData,
    numberOfCardsPerPage
  );

  return (
    <>
      <nav className={style['page-navigation']}>
        <ul className={style['pages-list']}>
          {arrayOfPageNumbers.map((item, index) => {
            return (
              <li className={style['page-item']} key={index}>
                <a
                  key={index}
                  onClick={() => onClickGoToPage(index)}
                  className={`${
                    valueCurrentId === index ? style['active'] : ''
                  } ${style['page-link']} `}
                  href={`#page${index + 1}`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
