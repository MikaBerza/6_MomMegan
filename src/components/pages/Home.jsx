import React from 'react';
//
import Categories from '../Categories';
import Sort from '../Sort';
import MeganBlock from '../folderMeganBlock/MeganBlock';
import MeganBlockSkeleton from '../folderMeganBlock/MeganBlockSkeleton';

import { getFilteredArrayByCategory } from '../../modules/modules';
import { listOfCategoryItemNames } from '../../assets/listsWithNames';

function Home() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);
  const [pizzaProductData, setPizzaProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // создадим массив для отображения скелетона пиц (он будет заполнен 10шт undefined)
  const arrayForSkeleton = [...new Array(15)];
  // console.log(categoryId, 'categoryId');
  console.log(sortId, 'sortId');

  /*______________________________________________________________________________________________*/
  // Проверим работу импортируемой функции
  // console.log(
  //   getFilteredArrayByCategory(pizzaProductData, 1, 2),
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
    fetch('https://mommegan-c835e-default-rtdb.firebaseio.com/shoesData.json')
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

  const arrNewDataProduct = getFilteredArrayByCategory(
    pizzaProductData,
    sortId,
    categoryId
  );

  // console.log(arrNewDataProduct);

  return (
    <div className='container'>
      <div className='content__top'>
        {/* Категории */}
        <Categories
          value={categoryId}
          onClickCategories={setCategoryId}
          listOfCategoryItemNames={listOfCategoryItemNames}
        />
        {/* Сортировка */}
        <Sort sortId={sortId} setSortId={setSortId} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {/* Пицца-блок */}
        {/* если  isLoading === true отображаем MeganBlockSkeleton, а если false отображаем MeganBlock*/}
        {isLoading
          ? arrayForSkeleton.map((item, index) => {
              return <MeganBlockSkeleton key={index} />;
            })
          : arrNewDataProduct.map((obj) => {
              return <MeganBlock key={obj.id} {...obj} />;
            })}
      </div>
    </div>
  );
}

export default Home;
