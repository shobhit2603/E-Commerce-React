import { useState, useEffect } from "react";
import {
  ORDERS_STORAGE_KEY,
  getStorageItem,
  setStorageItem,
} from "../utils/storage";

export const useOrders = () => {
  const [orders, setOrders] = useState(() =>
    getStorageItem(ORDERS_STORAGE_KEY, []),
  );

  useEffect(() => {
    setStorageItem(ORDERS_STORAGE_KEY, orders);
  }, [orders]);

  const placeOrder = (cartItems, total, clearCartFn) => {
    if (!cartItems || cartItems.length === 0) return;

    const newOrder = {
      orderId: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      items: cartItems,
      total,
      status: "Processing",
    };

    setOrders((prev) => [newOrder, ...prev]);
    if (clearCartFn) clearCartFn();
  };

  return { orders, placeOrder };
};
