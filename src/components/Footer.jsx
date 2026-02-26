import { Store } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 py-12 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2 mb-4 w-max group px-0!"
          >
            <div className="bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 p-1.5 rounded-lg group-hover:bg-violet-600 dark:group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
              <Store className="w-5 h-5" />
            </div>
            <h2 className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-gray-50 transition-colors">
              Tech
              <span className="text-violet-600 dark:text-violet-400">
                Store
              </span>
            </h2>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm text-gray-500 dark:text-gray-400 transition-colors">
            The ultimate destination for premium tech gear, providing top-notch
            products seamlessly to everyday users and professionals.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight transition-colors">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-violet-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-violet-600 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-violet-600 transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight transition-colors">
            Legal
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-500">
            <li>
              <a href="#" className="hover:text-violet-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600 transition-colors">
                Return Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 dark:text-gray-500 font-medium transition-colors">
        <p>© {new Date().getFullYear()} TechStore. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed with ❤️ for Tech Enthusiasts.</p>
      </div>
    </footer>
  );
};

export default Footer;
