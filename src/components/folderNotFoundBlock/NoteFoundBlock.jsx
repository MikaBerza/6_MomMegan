import React from 'react';
import styles from './NoteFoundBlock.module.css';
//
function NoteFoundBlock() {
  return (
    <div className={styles.wrapper}>
      <h1>
        <span className={styles.emoji}>&#128579;</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению данные отсутствуют</p>
    </div>
  );
}

export default NoteFoundBlock;
