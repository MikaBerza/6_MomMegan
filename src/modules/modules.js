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
  const newArr = arr.map(function (item) {
    return this.indexOf(item);
  }, arr);
  return newArr;
}
// функция, получить отсортированный массив по (алфавиту(title), цене(price), популярности(rating))
export function getSortedData(productData, sortingNumber) {
  // Создаем копию исходного массива
  const copyDataArray = [...productData];

  // запишем в константы индексы элементов из списка сортировки
  const rating = listOfNamesOfSortingElements.indexOf('популярности');
  const price = listOfNamesOfSortingElements.indexOf('цене');
  const alphabet = listOfNamesOfSortingElements.indexOf('алфавиту');

  // Выбираем метод сортировки в зависимости от sortingNumber, а пока
  // объявим переменную и присвоили ей значение null
  let sortFunction = null;
  if (sortingNumber === alphabet) {
    // Для правильной сортировки слов по русскому алфавиту используем метод localeCompare()
    // с использованием правил локали для англ.яз "en"
    sortFunction = (a, b) => a['title'].localeCompare(b['title'], 'en');
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
export function getFilteredData(productData, categoryNumber) {
  // Отфильтруем массив по категориям (categoryNumber) и вернем его
  return productData.filter((item) => item.category === categoryNumber);
}

// функция, получить отсортированный и отфильтрованный массив
export function getSortedAndFilteredData(
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
  // Проверяем, является ли sortingNumber и categoryNumber допустимым свойством для сортировки и фильтрации
  if (!validSortProperties.includes(sortingNumber)) {
    return 'Указан неверный параметр функции sortingNumber (Invalid function parameter sortingNumber specified)';
  } else if (!validFilterProperties.includes(categoryNumber)) {
    return 'Указан неверный параметр функции categoryNumber (Invalid function parameter categoryNumber specified)';
  }

  // Отсортировать массив по выбранному свойству (sortingNumber)
  const sortedArray = getSortedData(productData, sortingNumber);
  // если выбрана категория "Все", то возвращаем отсортированный массив
  if (categoryNumber === 0) {
    return sortedArray;
  }
  // Фильтровать отсортированный массив по категории (categoryNumber)
  const filteredAndSortedArray = getFilteredData(sortedArray, categoryNumber);
  // вернем отфильтрованный по категориям и отсортированный массив массив
  return filteredAndSortedArray;
}

// функция, получить отфильтрованные данные по введенным значениям в input
export function getFilteredDataByEnteredValues(arrData, inputValue) {
  const newArr = arrData.filter((obj) => {
    if (obj.title.toUpperCase().includes(inputValue.toUpperCase())) {
      return true;
    } else {
      return false;
    }
  });
  return newArr;
}
/*______________________________________________________________________________________________*/

// функция, получить массив с номерами страниц
export const getAnArrayWithPageNumbers = (arrData, numberOfProducts) => {
  let newArr = [];
  // количество страниц
  const numberOfPages = Math.ceil(arrData.length / numberOfProducts);
  for (let i = 1; i < numberOfPages + 1; i++) {
    newArr.push(i);
  }
  return newArr;
};

// функция, получить фрагмент массива
export const getArrayFragment = (
  arrData,
  currentIndex,
  numberOfElementsPerPage
) => {
  const begin = currentIndex * numberOfElementsPerPage;
  const end = begin + numberOfElementsPerPage;
  return arrData.slice(begin, end);
};
