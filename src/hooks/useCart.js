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
    const handleCartSync = () => {
      setCart(getStorageItem(CART_STORAGE_KEY, []));
    };

    window.addEventListener("cartUpdated", handleCartSync);
    return () => window.removeEventListener("cartUpdated", handleCartSync);
  }, []);

  const dispatchCartUpdate = (newCart) => {
    setCart(newCart);
    setStorageItem(CART_STORAGE_KEY, newCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const addToCart = (product, quantity = 1) => {
    const prev = getStorageItem(CART_STORAGE_KEY, []);
    const existing = prev.find((item) => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + quantity } : item,
      );
    } else {
      newCart = [...prev, { ...product, qty: quantity }];
    }
    dispatchCartUpdate(newCart);
  };

  const removeFromCart = (productId) => {
    const prev = getStorageItem(CART_STORAGE_KEY, []);
    const newCart = prev.filter((item) => item.id !== productId);
    dispatchCartUpdate(newCart);
  };

  const updateQty = (productId, delta) => {
    const prev = getStorageItem(CART_STORAGE_KEY, []);
    const newCart = prev.map((item) => {
      if (item.id === productId) {
        const newQty = item.qty + delta;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    dispatchCartUpdate(newCart);
  };

  const clearCart = () => dispatchCartUpdate([]);

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
