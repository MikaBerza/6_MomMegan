import React from 'react';
import './App.css';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  const [pizzasItem, setPizzasItem] = React.useState([]);

  /*
  Используем хук useEffect, чтобы функция fetch() не отправляла постоянно запросы !!!
  Подробнее:
  Когда компонент первоначально монтируется, `useEffect()` запускает асинхронный вызов `fetch()'
  чтобы получить данные о пиццах из базы данных Firebase.
  Этот эффект будет запущен только один раз, 
  так как зависимостей нет.
  */
  React.useEffect(() => {
    fetch('https://mommegan-c835e-default-rtdb.firebaseio.com/PizzaData.json')
      // преобразуем полученный ответа `response` в формате JSON
      .then((response) => response.json())
      .then((arr) => {
        // вызываем функцию `setPizzasItem(arr)` и устанавливаем значение `arr` в состояние компонента
        setPizzasItem(arr);
        // смотрим что получилось
        // console.log(pizzasItem);
      })
      // ловим ошибки, возникающие при выполнении fetch-запроса
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);

  return (
    <div className='wrapper'>
      {/* Заголовок */}
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            {/* Категории */}
            <Categories />
            {/* Сортировка */}
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {/* Пицца-блок */}
            {pizzasItem.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
