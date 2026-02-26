import { useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { PackagePlus } from "lucide-react";
import toast from "react-hot-toast";

const CreateProductForm = ({ onProductCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    discountPrice: "",
    description: "",
    image: "",
    rating: 0,
    stock: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newProduct = {
        ...formData,
        price: Number(formData.price),
        discountPrice: Number(formData.discountPrice) || Number(formData.price),
        rating: Number(formData.rating) || 4.5,
        stock: Number(formData.stock) || 10,
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80", // default placeholder
      };

      onProductCreate(newProduct);
      toast.success("Product created successfully!");

      // Reset form
      setFormData({
        name: "",
        category: "",
        brand: "",
        price: "",
        discountPrice: "",
        description: "",
        image: "",
        rating: 0,
        stock: "",
      });
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
        <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center">
          <PackagePlus className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
          <p className="text-gray-500 text-sm">
            Fill in the details to list a new product.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Product Name"
            id="name"
            placeholder="e.g. Mechanical Keyboard"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Category"
            id="category"
            placeholder="e.g. Electronics"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <Input
            label="Brand"
            id="brand"
            placeholder="e.g. Logitech"
            value={formData.brand}
            onChange={handleChange}
            required
          />
          <Input
            label="Stock Quantity"
            id="stock"
            type="number"
            placeholder="e.g. 50"
            value={formData.stock}
            onChange={handleChange}
            required
          />
          <Input
            label="Regular Price (₹)"
            id="price"
            type="number"
            placeholder="e.g. 5000"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <Input
            label="Discount Price (₹)"
            id="discountPrice"
            type="number"
            placeholder="e.g. 4500 (Optional)"
            value={formData.discountPrice}
            onChange={handleChange}
          />
        </div>

        <Input
          label="Image URL"
          id="image"
          placeholder="https://example.com/image.jpg"
          value={formData.image}
          onChange={handleChange}
        />

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Product details..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 resize-none"
            required
          />
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <Button type="submit" label="Create Product" loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
