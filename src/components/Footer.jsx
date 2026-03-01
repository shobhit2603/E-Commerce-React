import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", link: "/", id: 1 },
  { name: "About", link: "/about", id: 2 },
  { name: "Products", link: "/products", id: 3 },
  { name: "FAQ", link: "#", id: 4 },
  { name: "Privacy", link: "#", id: 5 },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 md:px-20 py-8 m-2 rounded-xl bottom-0 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <ul className="flex flex-wrap gap-6 text-sm font-medium text-gray-400">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="hover:text-lime-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            to="#"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
          >
            <Twitter size={20} />
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
          >
            <Instagram size={20} />
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <Facebook size={20} />
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={20} />
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Link to="/">
          <h1 className="text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-lime-400 to-sky-400 cursor-pointer hover:scale-[1.02] transition-transform duration-500 select-none pb-2">
            ShopIt.
          </h1>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm mt-6 border-t border-gray-800 pt-6">
        <p>&copy; {new Date().getFullYear()} ShopIt. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Tech Enthusiasts</p>
      </div>
    </footer>
  );
};

export default Footer;
