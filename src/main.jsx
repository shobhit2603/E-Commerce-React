import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./components/Product";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateProduct from "./pages/CreateProduct";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { ThemeProvider } from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/products/create",
            element: <CreateProduct />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/wishlist",
            element: <Wishlist />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
