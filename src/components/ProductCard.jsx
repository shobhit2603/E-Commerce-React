import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const inWishlist = isWishlisted(product.id);
  return (
    <div className="group flex flex-col bg-zinc-950 rounded-xl border border-gray-900 overflow-hidden hover:border-gray-800 transition-all duration-300 hover:-translate-y-1 relative h-full">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md transition-all duration-300 cursor-pointer ${
          inWishlist ? "text-red-500" : "text-gray-400 hover:text-red-500"
        }`}
      >
        <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
      </button>

      <Link
        to={`/product/${product.slug}`}
        className="relative h-56 md:h-64 overflow-hidden bg-zinc-900 block"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.discountPrice < product.price && (
          <div className="absolute bottom-4 left-4 bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Save ₹{product.price - product.discountPrice}
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1 gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-1">
            <span className="uppercase tracking-wider">{product.brand}</span>
          </div>
          <Link to={`/product/${product.slug}`}>
            <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-end justify-between mt-auto pt-2 border-t border-gray-900/50">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">
              ₹{product.discountPrice.toLocaleString()}
            </span>
            {product.discountPrice < product.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.price.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-lime-400 hover:text-black border border-gray-800 hover:border-lime-400 text-white p-3 rounded-xl transition-all duration-300 font-medium group/btn cursor-pointer"
          >
            <ShoppingCart
              size={20}
              className="group-hover/btn:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
