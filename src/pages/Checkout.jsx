import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api/orderApi";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const {cartItems, clearCart} = useCart();
  const location = useLocation();
  const buyNowItem = location.state?.buyNowProduct ?? null;

  const itemsToCheckout = buyNowItem ? [buyNowItem] : cartItems;
  const total = itemsToCheckout?.reduce((sum,item)=> sum+item.price*item.quantity,0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      ...formData, 
      items: itemsToCheckout?.map((item) => ({
        productId: item._id,   
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: total,
    };

    try {
      const response = await createOrder(orderData);
      console.log("Order created:", response);
      clearCart();
      clearBuyNowItem();
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
      
      <div className="md:col-span-2 bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>

      <div className="bg-gray-50 p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          {itemsToCheckout?.map((item)=>(
              <div key={item._id} className="flex justify-between">
                <span>{item.name} * {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
