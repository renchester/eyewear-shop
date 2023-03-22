import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import ProductPageLayout from './layout/ProductPageLayout';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';

import './sass/main.scss';
import ProductCollection from './components/ProductCollection';
import ProductSunglasses from './components/ProductSunglasses';
import ProductEyeglasses from './components/ProductEyeglasses';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route element={<ProductPageLayout />}>
          <Route index path="/products" element={<ProductCollection />} />
          <Route path="/products/eyeglasses" element={<ProductEyeglasses />} />
          <Route path="/products/sunglasses" element={<ProductSunglasses />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
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
