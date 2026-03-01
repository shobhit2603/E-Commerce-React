import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowRight, ShoppingCart } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQty, total, count } = useCart();

  return (
    <div className="flex flex-col lg:flex-row text-white m-2 gap-2 min-h-[80vh]">
      <div className="bg-black rounded-xl p-6 md:p-10 w-full lg:w-2/3 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
          Shopping Cart <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-lime-400">
            {count} {count === 1 ? "Item" : "Items"} in your cart
          </span>
        </h1>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500 py-20">
            <div className="text-6xl mb-4"><ShoppingCart size={64} /></div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Your cart is empty
            </h2>
            <p className="mb-8 text-center max-w-sm">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-lime-400 text-black px-8 py-3 rounded-full font-bold hover:bg-lime-500 transition-colors duration-300"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4 overflow-y-auto pr-2 max-h-[60vh] scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-900"
              >
                <div className="w-full sm:w-24 h-24 shrink-0 bg-zinc-900 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">
                        {item.brand}
                      </span>
                      <h3 className="text-lg font-bold text-gray-200 line-clamp-1">
                        {item.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-zinc-500 hover:text-red-500 p-2 transition-colors duration-300 cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-black py-1 px-3 rounded-full border border-zinc-800">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        disabled={item.qty <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-bold text-lime-400">
                        ₹{(item.discountPrice).toLocaleString()}
                      </div>
                      {item.discountPrice < item.price && (
                        <div className="text-xs text-zinc-500 line-through">
                          ₹{(item.price).toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-black rounded-xl p-6 md:p-10 w-full lg:w-1/3 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-zinc-900">
          Order Summary
        </h2>

        <div className="flex flex-col gap-4 mb-8 flex-1">
          <div className="flex justify-between text-zinc-400">
            <span>Subtotal ({count} items)</span>
            <span className="text-white">₹{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Shipping</span>
            <span className="text-lime-400">Free</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Taxes</span>
            <span className="text-white">Calculated at checkout</span>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-900">
          <div className="flex justify-between items-end mb-6">
            <span className="text-lg font-medium">Total</span>
            <span className="text-3xl font-bold text-lime-400">
              ₹{total.toLocaleString()}
            </span>
          </div>

          <button
            className="w-full bg-lime-400 hover:bg-lime-500 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
