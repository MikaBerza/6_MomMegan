import React from 'react';

import Sort from '../folderSortBlock/Sort';
import Filtering from '../folderFiltering/Filtering';
import Search from '../folderSearch/Search';
import MainTitle from '../folderMainTitle/MainTitle';
import ProductCard from '../folderProductCard/ProductCard';
import ProductCardSkeleton from '../folderProductCard/ProductCardSkeleton';

import {
  getSortedAndFilteredData,
  getFilteredDataByEnteredValues,
} from '../../modules/modules';

function HomePage({ searchValue, setSearchValue }) {
  const [filteringId, setFilteringId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);
  const [initialProductData, setInitialProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // создадим массив для отображения скелетона (он будет заполнен undefined)
  const arrayForSkeleton = [...new Array(20)];

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

  // карточки товаров
  const productsCards = getFilteredDataByEnteredValues(
    getSortedAndFilteredData(initialProductData, sortId, filteringId),
    searchValue
  ).map((obj, index) => {
    return <ProductCard key={obj.id} {...obj} />;
  });
  // карточки заменители
  const substituteCards = arrayForSkeleton.map((item, index) => {
    return <ProductCardSkeleton key={index} />;
  });

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <section className='filtering-and-sorting'>
        <Filtering valueId={filteringId} onClickFiltering={setFilteringId} />
        <Sort valueId={sortId} onClickSorting={setSortId} />
      </section>

      <MainTitle titleName='Товары' />

      <section className='product-gallery'>
        {isLoading === true ? substituteCards : productsCards}
      </section>
    </>
  );
}

export default HomePage;
