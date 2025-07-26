import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CustomerLayout from './layouts/CustomerLayout';
import Cart from './pages/Cart';

function App() {

  return (
    <Routes>
      <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
  )
}

export default App
