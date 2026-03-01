import { useWishlist } from "../hooks/useWishlist";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, ArrowRight, Heart } from "lucide-react";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, count } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="text-white m-2 min-h-[80vh]">
      <div className="bg-black rounded-xl p-6 md:p-10 w-full min-h-[80vh] flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">
          Your Wishlist
        </h1>
        <p className="text-zinc-400 mb-10">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-rose-600 font-bold">
            {count} {count === 1 ? "Item" : "Items"}
          </span>{" "}
          in your list
        </p>

        {wishlist.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 py-20">
            <div className="text-7xl mb-6">
              <Heart size={80} className="text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Nothing to see here
            </h2>
            <p className="mb-8 text-center max-w-sm">
              You haven't saved any items to your wishlist yet.
            </p>
            <Link
              to="/products"
              className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors duration-300"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative border border-gray-100"
              >
                <Link
                  to={`/product/${item.slug}`}
                  className="relative w-full h-56 md:h-64 overflow-hidden bg-gray-100 block"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>

                {/* Content Area */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                        {item.brand}
                      </span>
                      <Link to={`/product/${item.slug}`}>
                        <h3 className="font-bold text-gray-900 group-hover:text-black transition-colors line-clamp-2 text-lg">
                          {item.name}
                        </h3>
                      </Link>
                    </div>

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 p-2.5 rounded-full transition-all duration-300 cursor-pointer shrink-0"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gray-900">
                        ₹{item.discountPrice.toLocaleString()}
                      </span>
                      {item.discountPrice < item.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{item.price.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="flex items-center justify-center gap-2 bg-black hover:bg-green-500 text-white px-4 py-2.5 rounded-xl transition-all duration-300 font-medium group/btn cursor-pointer"
                    >
                      <span className="text-sm font-bold hidden sm:block">
                        Move to Cart
                      </span>
                      <ShoppingCart
                        size={18}
                        className="group-hover/btn:scale-110 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
