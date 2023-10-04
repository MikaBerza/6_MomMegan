import React from 'react';
import Button from '../folderButton/Button';
import style from './ButtonGroup.module.css';
import { Link } from 'react-router-dom';
//
function ButtonGroup() {
  return (
    <div className={style['wrapper']}>
      <Link to='/' className={style['link']}>
        <Button
          nameBtn={'Вернуться назад'}
          nameStyle={['button_v1', 'button-icon_v4', 'button-name_v1']}
        />
      </Link>
      <Button
        nameBtn={'Оплатить сейчас'}
        nameStyle={['button_v1', 'button-icon_v5', 'button-name_v1']}
      />
    </div>
  );
}

export default ButtonGroup;
