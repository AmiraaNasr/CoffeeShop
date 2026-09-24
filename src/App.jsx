import React from 'react';
import MyNavbar from './components/MyNavbar';
import HeroCarousel from './components/HeroCarousel';
import Products from './components/Products';
import Footer from './components/Footer';
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

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;
