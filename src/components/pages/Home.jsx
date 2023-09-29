import React from 'react';

import SortfiltrationBlock from '../folderSortingFiltering/SortfiltrationBlock';
import ProductCardBlock from '../folderProductCardBlock/ProductCardBlock';
import ProductCardBlockSkeleton from '../folderProductCardBlock/ProductCardBlockSkeleton';

import { getFilteredArrayByFiltering } from '../../modules/modules';

function Home() {
  const [filteringId, setFilteringId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);
  const [productData, setPizzaProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // создадим массив для отображения скелетона пиц (он будет заполнен 10шт undefined)
  const arrayForSkeleton = [...new Array(15)];

  /*______________________________________________________________________________________________*/
  // Проверим работу импортируемой функции
  // console.log(
  //   getFilteredArrayByFiltering(productData, 1, 2),
  //   'getFilteredArrayByFiltering'
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

  // присваиваем вернувшийся массив из функции в константу
  const arrNewDataProduct = getFilteredArrayByFiltering(
    productData,
    sortId,
    filteringId
  );
  // console.log(arrNewDataProduct);

  return (
    <>
      {/* Сортировка и Фильтрация Блок */}
      <SortfiltrationBlock
        filteringId={filteringId}
        setFilteringId={setFilteringId}
        sortId={sortId}
        setSortId={setSortId}
      />
      <section className='main-title'>
        <h1 className='main-title__item'>Товары</h1>
      </section>

      <section className='card-wrap'>
        {/* Продукт-Блок */}
        {isLoading
          ? arrayForSkeleton.map((item, index) => {
              return <ProductCardBlockSkeleton key={index} />;
            })
          : arrNewDataProduct.map((obj) => {
              return <ProductCardBlock key={obj.id} {...obj} />;
            })}
      </section>
    </>
  );
}

export default Home;

{
  /* <div class='card-wrap'>
  <div class='product-card'>
    <img class='product-card__image' />
    <h4 class='product-card__title'></h4>
    <div class='product-card__selector'></div>
    <div class='product-card__button'></div>
  </div>
</div>; */
}
