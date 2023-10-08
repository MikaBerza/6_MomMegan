import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/folderHeader/Header';
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';
import NotFoundPage from './components/pages/NotFoundPage';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className='wrapper'>
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export const AppContext = React.createContext();
export default App;
