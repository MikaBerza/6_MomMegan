import React from 'react';

import Filtering from './Filtering';
import Sort from './Sort';

import { listOfFilteringItemNames } from '../../assets/listsWithNames';
import { listOfNamesOfSortingElements } from '../../assets/listsWithNames';
//
function SortfiltrationBlock({
  filteringId,
  setFilteringId,
  sortId,
  setSortId,
}) {
  // const [filteringId, setFilteringId] = React.useState(0);
  // const [sortId, setSortId] = React.useState(0);

  return (
    <section className='sortfiltration'>
      {/* Сортировка и Фильтрация Блок */}
      {/* Категории */}
      <Filtering
        value={filteringId}
        onClickFiltering={setFilteringId}
        listOfFilteringItemNames={listOfFilteringItemNames}
      />
      {/* Сортировка */}
      <Sort
        sortId={sortId}
        setSortId={setSortId}
        listOfNamesOfSortingElements={listOfNamesOfSortingElements}
      />
    </section>
  );
}

export default SortfiltrationBlock;
