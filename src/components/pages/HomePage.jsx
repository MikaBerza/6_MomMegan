import React from 'react';

import { useSelector } from 'react-redux';

import Sort from '../folderSort/Sort';
import Filtering from '../folderFiltering/Filtering';
import Search from '../folderSearch/Search';
import MainTitle from '../folderMainTitle/MainTitle';
import ProductCard from '../folderProductCard/ProductCard';
import ProductCardSkeleton from '../folderProductCard/ProductCardSkeleton';
import Pagination from '../folderPagination/Pagination';
import PaginationSkeleton from '../folderPagination/PaginationSkeleton';

import {
  getSortedAndFilteredData,
  getArrayFragment,
  getFilteredDataByEnteredValues,
} from '../../modules/modules';

function HomePage() {
  /* используем хук useSelector из библиотеки Redux 
     для получения значений (filteringId, sortId) из состояния,
     с помощью селектора sortingAndFilteringSlice */
  const { filteringId, sortId, searchValue } = useSelector(
    (state) => state.sortingAndFilteringSlice
  );
  const { numberOfCardsPerPage, currentPage } = useSelector(
    (state) => state.paginationSlice
  );

  const [initialProductData, setInitialProductData] = React.useState([]);
  const [updateProductData, setUpdateProductData] = React.useState([]);
  const [productsCards, setProductsCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // создадим массив для отображения скелетона (он будет заполнен undefined)
  const arrayForSkeleton = [...new Array(numberOfCardsPerPage)];
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

  React.useEffect(() => {
    // получим отсортированный и отфильтрованный массив данных
    const productsCardsFragment = getArrayFragment(
      getSortedAndFilteredData(initialProductData, sortId, filteringId),
      currentPage,
      numberOfCardsPerPage
    );
    // запишем в переменную состояния
    setUpdateProductData(productsCardsFragment);
    // установим не все зависимости
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProductData, numberOfCardsPerPage, currentPage, filteringId]);

  /* используем (useMemo) для создания и кэширования отфильтрованных и отсортированных данных,
  это позволяет избежать повторного вычисления данных при изменении других зависимостей
  поиск товаров и фильтр по категориям */
  React.useMemo(() => {
    // запишем условие
    if (searchValue.trim().length === 0 && filteringId === 0) {
      setProductsCards(updateProductData);
      console.log('вариант-1');
    } else if (searchValue.trim().length === 0 && filteringId !== 0) {
      setProductsCards(
        getSortedAndFilteredData(initialProductData, sortId, filteringId)
      );
      console.log('вариант-2');
    } else if (searchValue.trim().length !== 0 && filteringId === 0) {
      setProductsCards(
        getFilteredDataByEnteredValues(initialProductData, searchValue)
      );
      console.log('вариант-3');
    } else if (searchValue.trim().length !== 0 && filteringId !== 0) {
      setProductsCards(
        getFilteredDataByEnteredValues(
          getSortedAndFilteredData(initialProductData, sortId, filteringId),
          searchValue
        )
      );
      console.log('вариант-4');
    }
    // установим не все зависимости
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, filteringId, sortId, updateProductData]);

  return (
    <>
      <Search />
      <section className='filtering-and-sorting'>
        <Filtering valueId={filteringId} />
        <Sort
          valueId={sortId}
          updateProductData={updateProductData}
          setUpdateProductData={setUpdateProductData}
        />
      </section>

      <MainTitle titleName='Товары' />

      <section className='product-gallery'>
        {isLoading === true
          ? arrayForSkeleton.map((item, index) => {
              // компонент, заглушки карточек товаров
              return <ProductCardSkeleton key={index} />;
            })
          : productsCards.map((obj) => {
              // компонент, карточки товаров
              return <ProductCard key={obj.id} {...obj} />;
            })}
      </section>
      <section
        className={
          searchValue.trim().length === 0 && filteringId === 0
            ? 'pagination'
            : `${'pagination'} ${'not-visible-element'}`
        }
      >
        {isLoading === true ? (
          // компонент, заглушка нумерации страниц
          <PaginationSkeleton />
        ) : (
          // компонент, нумерации страниц
          <Pagination initialProductData={initialProductData} />
        )}
      </section>
    </>
  );
}

export default HomePage;
