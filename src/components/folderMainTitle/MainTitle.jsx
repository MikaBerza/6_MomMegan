import React from 'react';
import style from './MainTitle.module.css';
//
function MainTitle({ titleName }) {
  return (
    <section className={style['title']}>
      <h1 className={style['title-item']}>{titleName}</h1>
    </section>
  );
}

export default MainTitle;
