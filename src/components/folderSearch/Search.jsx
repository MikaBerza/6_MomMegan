import React from 'react';
import style from './Search.module.css';

import { AppContext } from '../../App';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  /* Используем хук useRef из библиотеки React для создания ссылки на DOM-элемент.
  Чтобы обратиться к DOM элементу через React */
  const inputRef = React.useRef();

  // функция, по щелчку мыши очистить и добавить фокус
  const onClickClearAndAddFocus = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <section className={style['wrapper']}>
      <svg className={style['icon-search']} viewBox='0 0 32 32' version='1.1'>
        <path d='M10.437,19.442l-7.498,7.497c-0.585,0.586 -0.585,1.536 0,2.122c0.586,0.585 1.536,0.585 2.122,-0l7.649,-7.65c1.544,0.976 3.373,1.542 5.333,1.542c5.52,-0 10,-4.481 10,-10c0,-5.52 -4.48,-10 -10,-10c-5.519,-0 -10,4.48 -10,10c0,2.475 0.902,4.741 2.394,6.489Z' />
      </svg>
      <input
        className={style['input']}
        ref={inputRef}
        // с помощью value и onChange сделали компонент Search контролируемым
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type='text'
        placeholder='Поиск товаров'
      />
      {/* если searchValue имеет текс, то выводим SVG-картинку, в противном случае 
      ничего не выводим */}
      {searchValue ? (
        <svg
          className={style['icon-clear']}
          onClick={onClickClearAndAddFocus}
          version='1.1'
          viewBox='0 0 24 24'
        >
          <path d='M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z' />
        </svg>
      ) : (
        ''
      )}
    </section>
  );
}

export default Search;
