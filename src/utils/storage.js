export const CART_STORAGE_KEY = "v_shop_cart";
export const WISHLIST_STORAGE_KEY = "v_shop_wishlist";
export const ORDERS_STORAGE_KEY = "v_shop_orders";
export const PRODUCTS_STORAGE_KEY = "v_shop_products";

export const setStorageItem = (key, value) => {
  if (!key || value === undefined) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};

export const getStorageItem = (key, defaultValue = null) => {
  if (!key) return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

export const calculateTotal = (cartItems) => {
  if (!Array.isArray(cartItems)) return { total: 0, count: 0 };
  const total = cartItems.reduce(
    (acc, item) => acc + (item.discountPrice || item.price) * (item.qty || 1),
    0,
  );
  const count = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0);
  return { total, count };
};
