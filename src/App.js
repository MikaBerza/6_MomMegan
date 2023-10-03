import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/folderHeaderBlock/Header';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='heading'>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
