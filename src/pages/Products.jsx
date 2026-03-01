import { Plus } from "lucide-react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import CreateProductModal from "../components/CreateProductForm";
import { useProducts } from "../hooks/useProducts";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

const Products = () => {
  const { products, addProduct } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { addToast } = useToast();

  const handleListProduct = () => {
    if (!isAuthenticated) {
      addToast("You must be logged in to list a new product.", "error");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-black text-white m-2 rounded-xl min-h-screen px-6 md:px-20 py-12 flex flex-col gap-10 overflow-hidden relative">
      <div className="absolute w-[600px] h-[600px] bg-pink-500/5 blur-[120px] rounded-full top-20 -right-20 -z-10 animate-pulse hidden md:block" />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 z-10">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            All Products
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our complete collection of premium tech gear. From
            development rigs to immersive audio setups, we've got you covered.
          </p>
        </div>

        <button
          onClick={handleListProduct}
          className="group flex items-center justify-center gap-2 border-2 border-lime-400 px-6 py-3 rounded-lg font-bold hover:text-black hover:bg-lime-500 transition-colors duration-300 w-full md:w-auto shrink-0 cursor-pointer mt-2"
        >
          <span className="group-hover:rotate-90 transition-transform duration-300">
            <Plus size={20} />
          </span>
          List New Product
        </button>
      </div>

      <div className="w-full h-px bg-gray-900" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 gap-4">
            <h2 className="text-2xl font-bold text-gray-300">
              No Products Found
            </h2>
            <p className="text-gray-500 text-center max-w-md">
              Your store is currently empty. Click the 'List New Product' button
              to add your first product to the catalog.
            </p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addProduct}
      />
    </div>
  );
};

export default Products;
