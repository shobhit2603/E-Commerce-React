import { useParams, Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";
import Button from "./common/Button";
import { ShoppingCart, Heart } from "lucide-react";
import toast from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product =
    products.find((p) => p.id === parseInt(id)) ||
    products.find((p) => p.id === id); // ParseInt or string in case of Date.now() if it's stored as number vs string

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 rounded-3xl m-8">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <Link
          to="/products"
          className="mt-4 text-violet-600 font-semibold hover:underline"
        >
          Go back to Products
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, { icon: "🛒" });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    if (isWishlisted) {
      toast.error(`${product.name} removed from wishlist`);
    } else {
      toast.success(`${product.name} added to wishlist!`, { icon: "❤️" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/products"
        className="text-gray-500 hover:text-violet-600 font-medium mb-8 inline-block transition-colors"
      >
        &larr; Back to Products
      </Link>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* Image Status */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center p-8 lg:p-12 h-96 lg:h-auto border border-gray-200">
          {product.discountPrice < product.price && (
            <div className="absolute top-6 left-6 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              ON SALE
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Details */}
        <div className="mt-10 px-2 sm:px-0 lg:mt-0 flex flex-col justify-center">
          <p className="text-violet-600 font-bold text-sm tracking-widest uppercase mb-3">
            {product.category} &bull; {product.brand}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 my-6">
            <span className="text-4xl font-black text-gray-900">
              ₹{product.discountPrice || product.price}
            </span>
            {product.discountPrice < product.price && (
              <span className="text-2xl text-gray-400 line-through decoration-gray-300 font-medium">
                ₹{product.price}
              </span>
            )}
            {product.discountPrice < product.price && (
              <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full ml-2">
                Save ₹{product.price - product.discountPrice}
              </span>
            )}
          </div>

          <div className="flex items-center mb-8 bg-gray-50 w-max px-4 py-2 rounded-full border border-gray-200">
            <div className="flex items-center text-yellow-400">
              ★{" "}
              <span className="text-gray-900 ml-1.5 font-bold">
                {product.rating || 4.5}
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300 mx-4"></div>
            <span
              className={`text-sm font-bold ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </span>
          </div>

          <div className="prose prose-sm sm:prose-base text-gray-600 mb-10 leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 mt-auto border-t border-gray-100 pt-8">
            <Button
              onClick={handleAddToCart}
              className="flex-1 py-4 text-lg group"
              variant="primary"
            >
              <ShoppingCart className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Add to Cart
            </Button>
            <Button
              onClick={handleToggleWishlist}
              className={`sm:w-16 py-4 flex justify-center px-0 bg-white border-2 border-gray-200 hover:border-red-200 hover:bg-red-50 ${isWishlisted ? "border-red-200 bg-red-50 text-red-500" : "text-gray-600"}`}
            >
              <Heart
                className={`w-6 h-6 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
