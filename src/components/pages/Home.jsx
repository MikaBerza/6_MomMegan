import React from 'react';
//
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../folderPizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../folderPizzaBlock/PizzaBlockSkeleton';

import { getFilteredArrayByCategory } from '../../modules/modules';

import { nameCategories } from '../../assets/nameCategories';

function Home() {
  const [pizzaProductData, setPizzaProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // создадим массив для отображения скелетона пиц
  const arrayForSkeleton = [...new Array(10)];

  /*______________________________________________________________________________________________*/
  // Проверим работу импортируемой функции
  // console.log(
  //   getFilteredArrayByCategory(pizzaProductData, 'price', 2),
  //   'getFilteredArrayByCategory'
  // );
  /*______________________________________________________________________________________________*/

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
      // принимаем преобразованный объект JavaScript в качестве аргумента `productData`.
      .then((productData) => {
        // вызываем функцию `setPizzaProductData(productData)` и устанавливаем значение `productData` в состояние компонента
        setPizzaProductData(productData);
        setIsLoading(false);
      })
      // ловим ошибки, возникающие при выполнении fetch-запроса
      .catch((err) => {
        console.log(err, 'err');
        // после получения ошибки изменим флаг на true (чтобы появился скелетон пиц), т.к. изображения не будут загружены
        setIsLoading(true);
      });
    // при переходе на страницу автоматический скролл вверх
    window.scrollTo(0, 0);
  }, []);

  return (
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
        {/* если  isLoading === true отображаем PizzaBlockSkeleton, а если false отображаем PizzaBlock*/}
        {isLoading
          ? arrayForSkeleton.map((item, index) => {
              return <PizzaBlockSkeleton key={index} />;
            })
          : pizzaProductData.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
    </div>
  );
}

export default Home;
