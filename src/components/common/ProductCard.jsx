import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, { icon: "🛒" });
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (isWishlisted) {
      toast.error(`${product.name} removed from wishlist`);
    } else {
      toast.success(`${product.name} added to wishlist!`, { icon: "❤️" });
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      {/* Badge for discount */}
      {product.discountPrice < product.price && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm">
          Sale
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={handleToggleWishlist}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-500 transition-colors shadow-sm cursor-pointer"
      >
        <Heart
          className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
        />
      </button>

      {/* Image container */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <p className="text-xs text-violet-600 font-semibold tracking-wider uppercase mb-1">
          {product.category}
        </p>
        <h3 className="font-bold text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {product.rating}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-gray-900 dark:text-white">
              ₹{product.discountPrice || product.price}
            </span>
            {product.discountPrice < product.price && (
              <span className="text-xs text-gray-400 dark:text-gray-500 line-through">
                ₹{product.price}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-10 h-10 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-colors duration-300 shadow-sm cursor-pointer"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
