  // Бок с функциями для сортировки и фильтрации
  /*______________________________________________________________________________________________*/
  // функция, получить отсортированный массив по (алфавиту(title), цене(price), популярности(rating))
  export function getSortedArrayBy(productData, sortingName) {
    // Создаем копию исходного массива
    const copyDataArray = [...productData];
    // Выбираем метод сортировки в зависимости от sortingName
    let sortFunction;
    if (sortingName === 'title') {
      // Для правильной сортировки слов по русскому алфавиту используем метод localeCompare()
      sortFunction = (a, b) =>
        a[sortingName].localeCompare(b[sortingName], 'ru');
    } else {
      // Для сортировки по числовым свойствам (price и rating)
      sortFunction = (a, b) => a[sortingName] - b[sortingName];
    }
    // Сортируем и возвращаем отсортированный массив
    return copyDataArray.sort(sortFunction);
  }

  // функция, получить отфильтрованный массив по (категориям(category))
  export function getFilteredArrayByCategory(
    productData,
    sortingName,
    categoryNumber
  ) {
    // допустимые свойства сортировки запишем в константу
    const validSortProperties = ['title', 'price', 'rating'];
    // Проверяем, является ли sortingName допустимым свойством для сортировки
    if (!validSortProperties.includes(sortingName)) {
      return 'Указан неверный параметр функции!!! (Invalid function parameter specified)';
    }
    // Отсортировать массив по заданному свойству (sortingName)
    const sortedArray = getSortedArrayBy(productData, sortingName);
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