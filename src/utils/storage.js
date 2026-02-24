export const setStorageItem = (key, value) => {
  if (!key || !value) return "Please provide the key and value";
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key) => {
  if (!key) return "Please provide the key";
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const calculateTotal = () => {
  const cartItems = getStorageItem("cartItems");
  if (!cartItems) return 0;
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return total;
};
