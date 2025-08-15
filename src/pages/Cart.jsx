import React, { useState } from 'react';
import plantImage from '../assets/plant.jpeg'; 
import QuantityUpdateButton from '../components/QuantityUpdateButton';
import { Link } from 'react-router-dom';

const initialCart = [
  {
    id: 1,
    name: 'Aloe Vera',
    price: 150,
    image: plantImage,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 200,
    image: plantImage,
    quantity: 1,
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="px-6 py-8">
      {/* Breadcrumbs */}
      <div className="mb-4 text-2xl md:text-3xl text-gray-600 font-bold">
        My Cart!
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-start gap-4 border p-4 rounded-lg">
              
              <div className='w-11/12 flex flex-wrap justify-between items-start'>
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />

                  <div className='flex flex-col'>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-gray-600 text-lg font-semibold">Price: ₹{item.price}</p>
                    <p className="font-semibold text-lg text-green-600 block md:hidden">Subtotal: ₹{item.price * item.quantity}</p>
                  </div>

                  {/* Quantity */}
                  <div className="mt-2 md:mt-0">
                    <QuantityUpdateButton quantity={item.quantity} setQuantity={updateQuantity}/>
                  </div>

                  {/* Subtotal */}
                  <p className="font-semibold text-lg text-green-600 hidden md:block">Subtotal: ₹{item.price * item.quantity}</p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 text-xl font-bold top-2"
              >
                &times;
              </button>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="border rounded-lg p-6 bg-gray-50 h-fit">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <p className="mb-2">Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <p className="mb-4 text-lg font-semibold">Total: ₹{totalAmount}</p>

          <Link to="/checkout">
            <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 font-semibold">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
