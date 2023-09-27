import React from 'react';
//
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../folderPizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../folderPizzaBlock/PizzaBlockSkeleton';
import { nameCategories } from '../../assets/nameCategories';

function Home() {
  const [pizzaProductData, setPizzaProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // создадим массив для отображения скелетона пиц
  const arrayForSkeleton = [...new Array(10)];

  /*______________________________________________________________________________________________*/
  // функция, получить отсортированный массив по (алфавиту(title), цене(price), популярности(rating))
  function getSortedArrayBy(productData, sortingName) {
    // Создаем копию исходного массива
    const copyDataArray = [...productData];
    // Выбираем метод сортировки в зависимости от sortingName
    let sortFunction;
    if (sortingName === 'title') {
      // Для правильной сортировки слов по русскому алфавиту используем метод localeCompare()
      sortFunction = (a, b) => a[sortingName].localeCompare(b[sortingName], 'ru');
    } else {
      // Для сортировки по числовым свойствам (price и rating)
      sortFunction = (a, b) => a[sortingName] - b[sortingName];
    }
    // Сортируем и возвращаем отсортированный массив
    return copyDataArray.sort(sortFunction);
  }

  // функция, получить отфильтрованный массив по (категориям(category))
  function getFilteredArrayByCategory(productData, sortingName, categoryNumber) {
    // допустимые свойства сортировки запишем в константу
    const validSortProperties = ['title', 'price', 'rating'];
    // Проверяем, является ли sortingName допустимым свойством для сортировки
    if (!validSortProperties.includes(sortingName)) {
      return 'Указан неверный параметр функции!!! (Invalid function parameter specified)';
    }

    // Отсортировать массив по заданному свойству (sortingName)
    const sortedArray = getSortedArrayBy(productData, sortingName);
    // Фильтровать отсортированный массив по категории (categoryNumber)
    const filteredArray = sortedArray.filter(
      (item) => item.category === categoryNumber
    );
    // сделаем проверку
    if (filteredArray.length === 0) {
      // вернем null если отфильтрованный по категориям массив пуст
      return null;
    } else {
      // вернем отфильтрованный по категориям массив
      return filteredArray;
    }
  }
  // Проверим функцию
  console.log(
    getFilteredArrayByCategory(pizzaProductData, 'rating', 0),
    'getFilteredArrayByCategory'
  );
  console.log(pizzaProductData, 'pizzaProductData');
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
