import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/common/ProductCard";
import Button from "../components/common/Button";
import { Plus } from "lucide-react";

export default function Products() {
  const { products } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight transition-colors">
            Tech Showcase
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg transition-colors">
            Discover the best tech gear for your ultimate setup.
          </p>
        </div>
        <Link to="/products/create">
          <Button className="flex items-center gap-2 px-6">
            <Plus className="w-5 h-5" />
            <span>List New Product</span>
          </Button>
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400 text-lg border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl transition-colors">
          No products available at the moment. Add some using the button above.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
