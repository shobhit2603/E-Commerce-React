import { useState } from "react";
import {
  getStorageItem,
  setStorageItem,
  PRODUCTS_STORAGE_KEY,
} from "../utils/storage";

export const useProducts = () => {
  const [products, setProducts] = useState(() => {
    const storedProducts = getStorageItem(PRODUCTS_STORAGE_KEY);
    return storedProducts === null ? [] : storedProducts;
  });

  const addProduct = (productData) => {
    const id = Date.now().toString();
    const slug = productData.name.toLowerCase().replace(/\s+/g, "-");
    const newProduct = { ...productData, id, slug };

    setProducts((prev) => {
      const updatedProducts = [newProduct, ...prev];
      setStorageItem(PRODUCTS_STORAGE_KEY, updatedProducts);
      return updatedProducts;
    });
  };

  const deleteProduct = (id) => {
    setProducts((prev) => {
      const updatedProducts = prev.filter((p) => p.id !== id);
      setStorageItem(PRODUCTS_STORAGE_KEY, updatedProducts);
      return updatedProducts;
    });
  };

  return { products, addProduct, deleteProduct };
};
