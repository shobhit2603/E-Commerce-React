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
    const handleWishlistSync = () => {
      setWishlist(getStorageItem(WISHLIST_STORAGE_KEY, []));
    };

    window.addEventListener("wishlistUpdated", handleWishlistSync);
    return () =>
      window.removeEventListener("wishlistUpdated", handleWishlistSync);
  }, []);

  const dispatchWishlistUpdate = (newList) => {
    setWishlist(newList);
    setStorageItem(WISHLIST_STORAGE_KEY, newList);
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const toggleWishlist = (product) => {
    const prev = getStorageItem(WISHLIST_STORAGE_KEY, []);
    const existing = prev.find((item) => item.id === product.id);

    let newList;
    if (existing) {
      newList = prev.filter((item) => item.id !== product.id);
    } else {
      newList = [...prev, product];
    }
    dispatchWishlistUpdate(newList);
  };

  const removeFromWishlist = (productId) => {
    const prev = getStorageItem(WISHLIST_STORAGE_KEY, []);
    const newList = prev.filter((item) => item.id !== productId);
    dispatchWishlistUpdate(newList);
  };

  const clearWishlist = () => dispatchWishlistUpdate([]);

  const isWishlisted = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return {
    wishlist,
    count: wishlist.length,
    toggleWishlist,
    removeFromWishlist,
    clearWishlist,
    isWishlisted,
  };
};
