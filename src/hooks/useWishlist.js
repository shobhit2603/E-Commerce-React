import { useState, useEffect } from "react";
import {
  WISHLIST_STORAGE_KEY,
  getStorageItem,
  setStorageItem,
} from "../utils/storage";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() =>
    getStorageItem(WISHLIST_STORAGE_KEY, []),
  );

  useEffect(() => {
    setStorageItem(WISHLIST_STORAGE_KEY, wishlist);
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return { wishlist, toggleWishlist, isInWishlist };
};
