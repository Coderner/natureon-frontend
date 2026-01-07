import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CustomerLayout from './layouts/CustomerLayout';
import Cart from './pages/Cart';
import AdminLayout from './layouts/AdminLayout';
import ProductForm from './pages/admin/ProductForm';
import Checkout from './pages/Checkout';
import LoginSignup from './pages/LoginSignup';

function App() {

  return (
    <Routes>

      {/* Customer Routes */}
      <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/auth" element={<LoginSignup/>}/>
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="upload-product" element={<ProductForm />} />      
      </Route>

    </Routes>
  )
}

export default App
