import { useState, useEffect } from "react";
import {
  CART_STORAGE_KEY,
  getStorageItem,
  setStorageItem,
  calculateTotal,
} from "../utils/storage";

export const useCart = () => {
  const [cart, setCart] = useState(() => getStorageItem(CART_STORAGE_KEY, []));

  useEffect(() => {
    setStorageItem(CART_STORAGE_KEY, cart);
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item,
        );
      }
      return [...prev, { ...product, qty: quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQty = (productId, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQty = item.qty + delta;
          return { ...item, qty: newQty > 0 ? newQty : 1 };
        }
        return item;
      }),
    );
  };

  const clearCart = () => setCart([]);

  const { total, count } = calculateTotal(cart);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    total,
    count,
  };
};
