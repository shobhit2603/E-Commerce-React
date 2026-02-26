import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, Store, Sun, Moon } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";
import { useTheme } from "../context/ThemeContext";
import Badge from "./common/Badge";

const navLinks = [
  { name: "Home", link: "/", id: 1 },
  { name: "About", link: "/about", id: 2 },
  { name: "Products", link: "/products", id: 3 },
];

const Navbar = () => {
  const { count } = useCart();
  const { wishlist } = useWishlist();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-md px-4 py-4 sm:px-8 border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-violet-600 text-white p-2 rounded-xl group-hover:bg-violet-700 transition-colors shadow-sm">
          <Store className="w-5 h-5" />
        </div>
        <h1 className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-gray-50 transition-colors">
          Tech<span className="text-violet-600">Store</span>
        </h1>
      </Link>

      <ul className="hidden md:flex gap-8 font-medium text-sm text-gray-600 dark:text-gray-300">
        {navLinks.map(({ id, link, name }) => {
          const isActive =
            location.pathname === link ||
            (link !== "/" && location.pathname.startsWith(link));
          return (
            <li key={id}>
              <Link
                to={link}
                className={`transition-colors ${isActive ? "text-violet-600 dark:text-violet-400 font-bold" : "hover:text-violet-600 dark:hover:text-violet-400"}`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-blue-400 hover:bg-amber-50 dark:hover:bg-blue-900/20 rounded-full transition-all cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <Link
          to="/wishlist"
          className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all"
        >
          <Heart className="w-6 h-6" />
          <Badge count={wishlist.length} />
        </Link>
        <Link
          to="/cart"
          className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-full transition-all"
        >
          <ShoppingCart className="w-6 h-6" />
          <Badge count={count} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
