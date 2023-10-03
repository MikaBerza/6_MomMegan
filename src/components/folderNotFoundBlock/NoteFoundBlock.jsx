import React from 'react';
import style from './NoteFoundBlock.module.css';
//
function NoteFoundBlock() {
  return (
    <div className={style['container']}>
      <h1>
        <span className={style['emoji']} role='img' aria-label='emoji'>
          &#128579;
        </span>
        <br />
        Ничего не найдено
      </h1>
      <p className={style['description']}>К сожалению данные отсутствуют</p>
    </div>
  );
}

export default NoteFoundBlock;
