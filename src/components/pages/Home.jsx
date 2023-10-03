import React from 'react';

import Sort from '../folderSortBlock/Sort';
import Filtering from '../folderFilteringBlock/Filtering';
import ProductCard from '../folderProductCardBlock/ProductCard';
import ProductCardSkeleton from '../folderProductCardBlock/ProductCardSkeleton';

import { getFilteredData } from '../../modules/modules';

function Home() {
  const [filteringId, setFilteringId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);
  const [initialProductData, setInitialProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // создадим массив для отображения скелетона пиц (он будет заполнен 10шт undefined)
  const arrayForSkeleton = [...new Array(15)];

  /* Используем хук useEffect, чтобы функция fetch() не отправляла постоянно запросы !
  Подробнее:
  Когда компонент первоначально монтируется, `useEffect()` запускает асинхронный вызов `fetch()'
  чтобы получить данные о пиццах из базы данных Firebase. Этот эффект будет запущен только 
  один раз, так как зависимостей нет. */
  React.useEffect(() => {
    setIsLoading(true);
    fetch('https://mommegan-c835e-default-rtdb.firebaseio.com/shoesData.json')
      // преобразуем полученный ответа `response` в формате JSON
      .then((response) => response.json())
      // принимаем преобразованный объект JavaScript в качестве аргумента `initialProductData`.
      .then((data) => {
        // вызываем функцию `setInitialProductData()` в нееи устанавливаем значение `data` в состояние компонента
        setInitialProductData(data);
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
    <>
      <section className='filtering-and-sorting'>
        <Filtering valueId={filteringId} onClickFiltering={setFilteringId} />
        <Sort valueId={sortId} onClickSorting={setSortId} />
      </section>

      <section className='main-title'>
        <h1 className='main-title__item'>Товары</h1>
      </section>

      <section className='product-gallery'>
        {isLoading
          ? arrayForSkeleton.map((item, index) => {
              return <ProductCardSkeleton key={index} />;
            })
          : getFilteredData(initialProductData, sortId, filteringId).map(
              (obj) => {
                return <ProductCard key={obj.id} {...obj} />;
              }
            )}
      </section>
    </>
  );
}

export default Home;
