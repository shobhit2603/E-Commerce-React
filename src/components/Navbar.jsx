import { ArrowRight, Heart, ShoppingCart, Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

const navLinks = [
  { name: "Home", link: "/", id: 1 },
  { name: "About", link: "/about", id: 2 },
  { name: "Products", link: "/products", id: 3 },
];

const Navbar = () => {
  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { isAuthenticated, logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleProtectedAction = (e, path, actionName) => {
    if (!isAuthenticated) {
      e.preventDefault();
      addToast(`You must be logged in to view ${actionName}.`, "error");
    } else if (path) {
      navigate(path);
    }
  };

  const handleLogout = () => {
    logout();
    addToast("Successfully logged out", "success");
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between bg-black text-white px-20 py-3 m-2 rounded-xl">
      <Link to="/">
        <h1 className="group text-2xl font-medium flex items-center justify-center gap-2">
          <span className="text-lime-400 group-hover:scale-110 transition-transform duration-300">
            <Store />
          </span>
          ShopIt
        </h1>
      </Link>
      <ul className="flex items-center justify-center gap-10 font-medium">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="hover:text-sky-400 transition-colors duration-300 cursor-pointer"
          >
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-5">
        <div
          onClick={(e) => handleProtectedAction(e, "/wishlist", "wishlist")}
          className="relative hover:text-red-400 transition-colors duration-300 cursor-pointer flex items-center justify-center"
        >
          <Heart size={20} />
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </div>
        <div
          onClick={(e) => handleProtectedAction(e, "/cart", "cart")}
          className="relative hover:text-green-400 transition-colors duration-300 cursor-pointer flex items-center justify-center"
        >
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-lime-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="group flex items-center justify-center gap-2 font-medium hover:text-red-400 transition-colors duration-300 cursor-pointer"
          >
            Logout{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={20} />
            </span>
          </button>
        ) : (
          <Link
            to="/login"
            className="group flex items-center justify-center gap-2 font-medium hover:text-lime-400 transition-colors duration-300 cursor-pointer"
          >
            Login{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={20} />
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
