import {
  listOfNamesOfSortingElements,
  listOfFilteringItemNames,
} from '../assets/listsWithNames';

// Бок с функциями для сортировки и фильтрации
/*______________________________________________________________________________________________*/
// функция, преобразовать массив элементов в массив с индексами
function convertAnArrayOfElementsToAnArrayWithIndexes(arr) {
  /* получим все индексы элементов массива в другом массиве, 
  но исходный массив при этом не изменяется */
  const newArr = arr.map(function(item) {
    return this.indexOf(item);
  }, arr);
  return newArr;
}
// функция, получить отсортированный массив по (алфавиту(title), цене(price), популярности(rating))
export function getSortedData(productData, sortingNumber) {
  // Создаем копию исходного массива
  const copyDataArray = [...productData];
  // Выбираем метод сортировки в зависимости от sortingNumber
  let sortFunction;
  // запишем в константы индексы элементов из списка сортировки
  const rating = listOfNamesOfSortingElements.indexOf('популярности');
  const price = listOfNamesOfSortingElements.indexOf('цене');
  const alphabet = listOfNamesOfSortingElements.indexOf('алфавиту');

  if (sortingNumber === alphabet) {
    // Для правильной сортировки слов по русскому алфавиту используем метод localeCompare()
    // с использованием правил локали для русского языка "ru"
    sortFunction = (a, b) => a['title'].localeCompare(b['title'], 'ru');
  } else if (sortingNumber === price) {
    // Для сортировки по числовым свойствам (price)
    sortFunction = (a, b) => a['price'] - b['price'];
  } else if (sortingNumber === rating) {
    // Для сортировки по числовым свойствам (rating)
    sortFunction = (a, b) => b['rating'] - a['rating'];
  }
  // Сортируем и возвращаем отсортированный массив
  return copyDataArray.sort(sortFunction);
}

// функция, получить отфильтрованный массив по (категориям(category))
export function getFilteredData(
  productData,
  sortingNumber,
  categoryNumber
) {
  // допустимые свойства сортировки запишем в константу
  const validSortProperties = convertAnArrayOfElementsToAnArrayWithIndexes(
    listOfNamesOfSortingElements
  );
  // допустимые свойства фильтрации запишем в константу
  const validFilterProperties = convertAnArrayOfElementsToAnArrayWithIndexes(
    listOfFilteringItemNames
  );
  // Проверяем, является ли sortingNumber и categoryNumber допустимым свойством для сортировки
  if (!validSortProperties.includes(sortingNumber)) {
    return 'Указан неверный параметр функции sortingNumber (Invalid function parameter sortingNumber specified)';
  } else if (!validFilterProperties.includes(categoryNumber)) {
    return 'Указан неверный параметр функции categoryNumber (Invalid function parameter categoryNumber specified)';
  }
  // Отсортировать массив по заданному свойству (sortingNumber)
  const sortedArray = getSortedData(productData, sortingNumber);
  // если выбрана категория "Все", то возвращаем отсортированный массив
  if (categoryNumber === 0) {
    return sortedArray;
  }
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
/*______________________________________________________________________________________________*/
