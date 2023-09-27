import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      {/* Заголовок */}
      <Header />
      <div className='content'>
        {/* <Home /> */}
        {/* <NotFound /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          {/* Если ничего не нашлось, то отображаем страницу <NotFound /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
