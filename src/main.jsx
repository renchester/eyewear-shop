import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';

import './sass/main.scss';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
);
