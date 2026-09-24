import React from 'react';
import MyNavbar from './components/MyNavbar';
import HeroCarousel from './components/HeroCarousel';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* 1. Navbar */}
      <MyNavbar />

      {/* 2. Hero Carousel */}
      <HeroCarousel />

      {/* 3. Products Grid */}
      <Products />
    </div>
  );
}

export default App;
