import React, { createContext, useState } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
// import pizzas from './assets/pizzas.json';
import { Routes, Route } from 'react-router-dom';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;