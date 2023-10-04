import React from 'react';
import style from './Search.module.css';
//
function Search() {
  return (
    <section className={style['wrapper']}>
      <svg
      className={style['iconSearch']}
        viewBox='0 0 32 32'
        version='1.1'
      >
        <path d='M10.437,19.442l-7.498,7.497c-0.585,0.586 -0.585,1.536 0,2.122c0.586,0.585 1.536,0.585 2.122,-0l7.649,-7.65c1.544,0.976 3.373,1.542 5.333,1.542c5.52,-0 10,-4.481 10,-10c0,-5.52 -4.48,-10 -10,-10c-5.519,-0 -10,4.48 -10,10c0,2.475 0.902,4.741 2.394,6.489Z' />
      </svg>
      <input
        className={style['input']}
        type='text'
        placeholder='Поиск товаров...'
      />
    </section>
  );
}

export default Search;
