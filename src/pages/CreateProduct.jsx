import CreateProductForm from "../components/CreateProductForm";
import { useProducts } from "../hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleProductCreate = (productData) => {
    addProduct(productData);
    setTimeout(() => {
      navigate("/products");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/products"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-violet-600 mb-6 transition-colors"
        >
          &larr; Back to Products
        </Link>
        <CreateProductForm onProductCreate={handleProductCreate} />
      </div>
    </div>
  );
};

export default CreateProduct;
