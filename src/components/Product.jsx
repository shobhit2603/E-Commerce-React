import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <Link to="/products" className="mt-4 text-violet-600 hover:underline">
          Go back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <Link
        to="/products"
        className="text-violet-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-800">
        <div className="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center min-h-100">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto object-cover max-h-125"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-violet-600 font-medium text-sm tracking-wider uppercase mb-2">
            {product.category} &bull; {product.brand}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.discountPrice}
            </span>
            {product.discountPrice < product.price && (
              <span className="text-xl text-gray-500 line-through">
                ₹{product.price}
              </span>
            )}
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
              Save ₹{product.price - product.discountPrice}
            </span>
          </div>

          <div className="flex items-center mb-6">
            <div className="flex items-center text-yellow-400 text-lg">
              ★{" "}
              <span className="text-gray-700 ml-1 text-sm font-medium">
                {product.rating}
              </span>
            </div>
            <span className="mx-3 text-gray-300">|</span>
            <span
              className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="flex gap-4 mt-auto">
            <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-md shadow-violet-200 cursor-pointer">
              Add to Cart
            </button>
            <button className="p-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-red-500 transition duration-200 w-14 flex items-center justify-center text-xl cursor-pointer">
              ♥
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
