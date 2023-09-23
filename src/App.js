import './App.css';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import pizzasItem from './assets/pizzas.json';

function App() {
  console.log(pizzasItem);
  return (
    <div className='wrapper'>
      {/* Заголовок */}
      <Header />
      <div className='content'>
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
            {pizzasItem.map((obj) => {
              return (
              <PizzaBlock {...obj}
              />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
