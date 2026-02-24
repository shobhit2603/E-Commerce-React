import { Link } from "react-router-dom";
import products from "../data/products";
import { setStorageItem } from "../utils/storage";

export default function Products() {
  setStorageItem("products", products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(({ id, image, name, category, price, discountPrice }) => (
        <Link
          to={`/product/${id}`}
          key={id}
          className="border p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-xl"
          />

          <h3 className="mt-3 font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="font-bold text-lg text-neutral-700">
                ₹{discountPrice}
              </span>
              <span className="line-through text-gray-400 ml-2 text-sm">
                ₹{price}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
