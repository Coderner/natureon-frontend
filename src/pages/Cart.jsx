import QuantityUpdateButton from '../components/QuantityUpdateButton';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";


const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(cartItems);

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-start">
          <div className="mb-4 text-2xl md:text-3xl text-gray-800 font-semibold">
            My Cart!
          </div>
          <button 
            className="px-4 py-1 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 hover:cursor-pointer"
            onClick={()=>clearCart()}  
          >
            Clear Cart
          </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-start gap-4 shadow-sm p-4 rounded-lg">
              
              <div className='w-11/12 flex flex-wrap justify-between items-start'>
                  <img src={item?.images[0]} alt={item?.name} className="w-24 h-24 object-cover rounded" />

                  <div className='flex flex-col'>
                    <h3 className="text-2xl font-bold">{item?.name}</h3>
                    <p className="text-gray-600 text-lg font-semibold">
                      {
                        new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR"
                        }).format(item?.price)
                      }
                    </p>
                    <p className="font-semibold text-lg text-green-600 block md:hidden">
                      Subtotal: {
                        new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR"
                        }).format(item?.price * item?.quantity)
                      }
                    </p>
                  </div>

                  <div className="mt-2 md:mt-0">
                        <QuantityUpdateButton
                          quantity={item.quantity}
                          setQuantity={updateQuantity}  
                          id={item._id}
                        />                  
                  </div>

                  <p className="font-semibold text-lg text-green-600 hidden md:block">Subtotal: ₹{item.price * item.quantity}</p>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-700 text-xl font-bold top-2 cursor-pointer"
              >
                &times;
              </button>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
          )}
        </div>

        <div className="px-8 py-4 rounded-2xl bg-gray-100 shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <p className="mb-2">Total Items: {cartItems.length}</p>
          <p className="mb-4 text-lg font-semibold">Total: 
               {
                  new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR"
                  }).format(totalAmount)
                }
          </p>

          <Link to="/checkout">
            <button className="w-2/3 bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-green-700 hover:cursor-pointer">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
