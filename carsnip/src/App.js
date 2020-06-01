import React from 'react';
import './App.css';
import Header from './Header/Header'
import CarSearch from './CarSearch/CarSearch'
import ManufacturerCardsWrapper from './ManufacturerCardsWrapper/ManufacturerCardsWrapper'

function App() {
  return (
    <div className="App">
      <Header />
      <CarSearch />
      <ManufacturerCardsWrapper />
    </div>
  );
}

export default App;
