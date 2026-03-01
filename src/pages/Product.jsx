import { useParams, useNavigate, Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Trash2,
  Tag,
  ShieldCheck,
  Truck,
} from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, deleteProduct } = useProducts();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const product = products.find((p) => p.slug === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-black text-white m-2 rounded-xl border border-zinc-900 p-6">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <p className="text-zinc-400 mb-8 text-center max-w-sm">
          The product you are looking for doesn't exist or has been removed from
          the store.
        </p>
        <Link
          to="/products"
          className="bg-lime-400 text-black px-8 py-3 rounded-full font-bold hover:bg-lime-500 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const inWishlist = isWishlisted(product.id);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(product.id);
      navigate("/products");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row text-white m-2 gap-2 min-h-[80vh]">
      <div className="bg-black rounded-xl p-6 md:p-10 w-full lg:w-1/2 flex flex-col justify-center items-center relative border border-zinc-900/50">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-10 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer bg-zinc-950/80 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-800"
        >
          <ArrowLeft size={18} />
          <span className="font-medium text-sm">Back</span>
        </button>

        <div className="w-full max-w-lg aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 relative group shadow-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out z-0"
          />
        </div>
      </div>

      <div className="bg-black rounded-xl p-6 md:p-10 w-full lg:w-1/2 flex flex-col justify-between border border-zinc-900/50">
        <div className="flex flex-col gap-6 pt-4 lg:pt-0">
          <div>
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs mb-2 block w-fit border border-lime-400/20 bg-lime-400/10 px-3 py-1 rounded-full">
              {product.brand}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {product.name}
            </h1>

            <div className="flex items-end gap-4 mt-6 border-b border-zinc-900 pb-8">
              <span className="text-4xl md:text-5xl font-bold text-lime-400">
                ₹{product.discountPrice.toLocaleString()}
              </span>
              {product.discountPrice < product.price && (
                <span className="text-xl text-zinc-500 line-through mb-1">
                  ₹{product.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400 text-lg leading-relaxed">
              {product.description ||
                "Experience premium quality with this exceptional product. Designed directly to fulfill your needs with superior performance and durable materials."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-900">
              <ShieldCheck className="text-lime-400" size={24} />
              <span className="text-sm font-medium text-zinc-300">
                1 Year Warranty
              </span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-900">
              <Truck className="text-lime-400" size={24} />
              <span className="text-sm font-medium text-zinc-300">
                Free Fast Delivery
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 bg-zinc-950 p-2 rounded-2xl border border-zinc-900 backdrop-blur-xl">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-lime-400 hover:bg-lime-500 text-black py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors duration-300 cursor-pointer shadow-lg shadow-lime-400/20"
          >
            <ShoppingCart size={22} className="fill-current" />
            Add to Cart
          </button>

          <button
            onClick={() => toggleWishlist(product)}
            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 border-2 cursor-pointer ${
              inWishlist
                ? "bg-red-500/10 border-red-500/20 text-red-500 hover:bg-red-500/20"
                : "bg-black border-zinc-800 text-white hover:border-zinc-700"
            }`}
          >
            <Heart size={22} className={inWishlist ? "fill-current" : ""} />
            {inWishlist ? "Saved" : "Save"}
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold border-2 border-red-900/50 text-red-500 bg-red-950/20 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 cursor-pointer group"
            title="Delete Product"
          >
            <Trash2
              size={22}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="sr-only sm:not-sr-only">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
