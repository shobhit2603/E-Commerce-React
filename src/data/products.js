const products = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    slug: "wireless-noise-cancelling-headphones",
    category: "Audio",
    brand: "SoundCore",
    price: 5999,
    discountPrice: 4999,
    rating: 4.6,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    description:
      "Premium wireless headphones with active noise cancellation and deep bass.",
  },
  {
    id: 2,
    name: "Mechanical RGB Gaming Keyboard",
    slug: "mechanical-rgb-gaming-keyboard",
    category: "Accessories",
    brand: "HyperX",
    price: 4499,
    discountPrice: 3899,
    rating: 4.7,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
    description: "Mechanical keyboard with RGB lighting and tactile switches.",
  },
  {
    id: 3,
    name: "UltraWide Curved Monitor 34-inch",
    slug: "ultrawide-curved-monitor-34-inch",
    category: "Monitors",
    brand: "LG",
    price: 34999,
    discountPrice: 31999,
    rating: 4.8,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Ultra-wide curved monitor ideal for multitasking and immersive workflows.",
  },
  {
    id: 4,
    name: "Wireless Ergonomic Mouse",
    slug: "wireless-ergonomic-mouse",
    category: "Accessories",
    brand: "Logitech",
    price: 2999,
    discountPrice: 2499,
    rating: 4.5,
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    description:
      "Ergonomic wireless mouse designed for long productivity sessions.",
  },
  {
    id: 5,
    name: "Portable SSD 1TB USB-C",
    slug: "portable-ssd-1tb-usb-c",
    category: "Storage",
    brand: "Samsung",
    price: 8999,
    discountPrice: 7999,
    rating: 4.8,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1591799265444-d66432b91588?auto=format&fit=crop&w=800&q=80",
    description: "High-speed portable SSD with fast USB-C data transfer.",
  },
  {
    id: 6,
    name: "Smartwatch Pro Series",
    slug: "smartwatch-pro-series",
    category: "Wearables",
    brand: "Amazfit",
    price: 10999,
    discountPrice: 9499,
    rating: 4.4,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80",
    description:
      "Smartwatch with fitness tracking, notifications, and long battery life.",
  },
  {
    id: 7,
    name: "USB-C Hub 7-in-1",
    slug: "usb-c-hub-7-in-1",
    category: "Accessories",
    brand: "Anker",
    price: 3999,
    discountPrice: 3299,
    rating: 4.6,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
    description: "Multiport USB-C hub with HDMI, USB 3.0, and SD card support.",
  },
  {
    id: 8,
    name: "Gaming Laptop RTX Series",
    slug: "gaming-laptop-rtx-series",
    category: "Laptops",
    brand: "ASUS",
    price: 129999,
    discountPrice: 119999,
    rating: 4.7,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    description:
      "Powerful gaming laptop with RTX graphics and high refresh rate display.",
  },
  {
    id: 9,
    name: "Bluetooth Portable Speaker",
    slug: "bluetooth-portable-speaker",
    category: "Audio",
    brand: "JBL",
    price: 4999,
    discountPrice: 4299,
    rating: 4.5,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
    description:
      "Portable Bluetooth speaker with punchy sound and compact design.",
  },
  {
    id: 10,
    name: "4K Action Camera",
    slug: "4k-action-camera",
    category: "Cameras",
    brand: "GoPro",
    price: 24999,
    discountPrice: 21999,
    rating: 4.6,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Rugged 4K action camera with stabilization and waterproof body.",
  },
  {
    id: 11,
    name: "Dual Shock Wireless Controller",
    slug: "dual-shock-wireless-controller",
    category: "Gaming",
    brand: "Sony",
    price: 5999,
    discountPrice: 5499,
    rating: 4.7,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80",
    description:
      "Wireless gaming controller with ergonomic grip and responsive triggers.",
  },
  {
    id: 12,
    name: "1080p Full HD Webcam",
    slug: "1080p-full-hd-webcam",
    category: "Accessories",
    brand: "Logitech",
    price: 4999,
    discountPrice: 4299,
    rating: 4.5,
    stock: 32,
    image:
      "https://images.unsplash.com/photo-1726127461372-547b9ffa4236?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Full HD webcam perfect for streaming, meetings, and remote work.",
  },
  {
    id: 13,
    name: "Noise Cancelling Earbuds",
    slug: "noise-cancelling-earbuds",
    category: "Audio",
    brand: "Sony",
    price: 8999,
    discountPrice: 7999,
    rating: 4.6,
    stock: 38,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
    description:
      "True wireless earbuds with active noise cancellation and clear audio.",
  },
  {
    id: 14,
    name: "RGB Gaming Mouse Pad XL",
    slug: "rgb-gaming-mouse-pad-xl",
    category: "Gaming",
    brand: "Razer",
    price: 1999,
    discountPrice: 1599,
    rating: 4.4,
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
    description:
      "Large RGB mouse pad with smooth glide surface and anti-slip base.",
  },
  {
    id: 15,
    name: "Smart Home WiFi Router AX3000",
    slug: "smart-home-wifi-router-ax3000",
    category: "Networking",
    brand: "TP-Link",
    price: 7999,
    discountPrice: 6999,
    rating: 4.5,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80",
    description:
      "WiFi 6 router built for gaming, streaming, and smart home devices.",
  },
];

export default products;
