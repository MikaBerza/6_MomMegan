import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/folderHeader/Header';
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';
import NotFoundPage from './components/pages/NotFoundPage';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  // console.log(searchValue, 'searchValue');
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <CartPage
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
