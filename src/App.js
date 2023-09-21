import './App.css';

import pizzaLogo from './img/pizza-logo.svg';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className='wrapper'>
      {/* Заголовок */}
      <Header logo={pizzaLogo} />
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
            <PizzaBlock title='Мексиканская' price={500} />
            <PizzaBlock title='Чизбургер' price={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
