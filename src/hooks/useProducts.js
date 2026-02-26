import { useState, useEffect } from "react";
import {
  PRODUCTS_STORAGE_KEY,
  getStorageItem,
  setStorageItem,
} from "../utils/storage";
import defaultProducts from "../data/products";

export const useProducts = () => {
  const [products, setProducts] = useState(() => {
    const stored = getStorageItem(PRODUCTS_STORAGE_KEY);
    if (stored && stored.length > 0) return stored;
    return defaultProducts;
  });

  useEffect(() => {
    setStorageItem(PRODUCTS_STORAGE_KEY, products);
  }, [products]);

  const addProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData,
      slug: productData.name.toLowerCase().replace(/\s+/g, "-"),
    };
    setProducts((prev) => [newProduct, ...prev]);
  };

  return { products, addProduct };
};
