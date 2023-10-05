import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/folderHeaderBlock/Header';
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Search from './components/folderSearch/Search';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='heading'>
        <Header />
      </header>
      <Search />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
