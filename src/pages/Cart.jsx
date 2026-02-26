import { useCart } from "../hooks/useCart";
import { useOrders } from "../hooks/useOrders";
import EmptyState from "../components/common/EmptyState";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, removeFromCart, updateQty, total, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const handleCheckout = () => {
    placeOrder(cart, total, clearCart);
    toast.success("Order placed successfully! 🎉", { duration: 4000 });
    navigate("/products");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmptyState
          icon={<ShoppingBag className="w-12 h-12" />}
          message="Your cart is empty"
          subMessage="Looks like you haven't added any tech gear yet."
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="p-6 flex flex-col sm:flex-row gap-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center p-2 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-1">
                          {item.brand}
                        </p>
                        <Link
                          to={`/product/${item.id}`}
                          className="text-lg font-bold text-gray-900 hover:text-violet-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <p className="text-xl font-black text-gray-900 ml-4">
                        ₹{(item.discountPrice || item.price) * item.qty}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-1">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-red-500 hover:shadow-sm transition-all text-gray-500 cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold w-4 text-center text-gray-900">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-green-500 hover:shadow-sm transition-all text-gray-500 cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">₹{total}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>

            <div className="border-t border-gray-100 my-6 pt-6 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-3xl font-black text-gray-900">
                ₹{total}
              </span>
            </div>

            <Button onClick={handleCheckout} className="w-full py-4 text-lg">
              Proceed to Checkout
            </Button>

            <p className="text-xs text-center text-gray-400 mt-6">
              Secure checkout. 100% money back guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
