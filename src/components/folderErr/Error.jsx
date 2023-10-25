import React from 'react';
//
import ErrorsImg from '../../assets/img/Errors.png';
import style from '../folderErr/Error.module.css'
function Error() {
  return (
    <div className={style['img']}>
      <img className={style['img-item']} src={ErrorsImg} alt='Error' />
    </div>
  );
}

export default Error;
