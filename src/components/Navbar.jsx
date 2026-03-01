import { useState } from "react";
import { ArrowRight, Heart, ShoppingCart, Store, Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <nav className="flex items-center justify-between bg-black text-white px-5 md:px-20 py-3 m-2 rounded-xl relative z-40">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <h1 className="group text-2xl font-medium flex items-center justify-center gap-2">
            <span className="text-lime-400 group-hover:scale-110 transition-transform duration-300">
              <Store />
            </span>
            ShopIt
          </h1>
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-10 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-sky-400 transition-colors duration-300 cursor-pointer"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center justify-center gap-5">
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

        <button
          className="md:hidden text-white hover:text-lime-400 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[50%] bg-zinc-950 border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col pt-6 px-6 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-2xl font-medium flex items-center gap-2 text-white">
              <span className="text-lime-400">
                <Store />
              </span>
              ShopIt
            </h1>
          </Link>
          <button
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 font-medium text-lg text-white/80">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-sky-400 transition-colors duration-300 cursor-pointer"
            >
              <Link
                to={link.link}
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6 mt-10 pt-8 border-t border-zinc-800 text-white/80">
          <div
            onClick={(e) => {
              handleProtectedAction(e, "/wishlist", "wishlist");
              if (isAuthenticated) setIsOpen(false);
            }}
            className="hover:text-red-400 transition-colors duration-300 cursor-pointer flex items-center gap-4 text-lg"
          >
            <div className="relative">
              <Heart size={24} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
            Wishlist
          </div>
          <div
            onClick={(e) => {
              handleProtectedAction(e, "/cart", "cart");
              if (isAuthenticated) setIsOpen(false);
            }}
            className="hover:text-green-400 transition-colors duration-300 cursor-pointer flex items-center gap-4 text-lg"
          >
            <div className="relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-lime-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            Cart
          </div>

          {isAuthenticated ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="group flex items-center gap-2 font-medium hover:text-red-400 transition-colors duration-300 cursor-pointer text-lg mt-4 w-fit"
            >
              Logout{" "}
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={20} />
              </span>
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-2 font-medium hover:text-lime-400 transition-colors duration-300 cursor-pointer text-lg mt-4 w-fit"
            >
              Login{" "}
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={20} />
              </span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
