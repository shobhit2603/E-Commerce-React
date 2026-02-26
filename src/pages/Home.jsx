import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { ArrowRight, ShieldCheck, Zap, Truck } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Ultra Fast",
    desc: "Latest generation tech with blazing performance.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure Checkout",
    desc: "100% protected payments & data safety.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Shipping",
    desc: "On all premium orders globally.",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 pt-20 pb-32 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] opacity-[0.03] dark:opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <span className="inline-block py-1.5 px-3 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-sm tracking-wide font-bold mb-6 animate-pulse transition-colors">
            NEW ARRIVALS 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 dark:text-gray-50 tracking-tight mb-8 leading-tight max-w-4xl transition-colors">
            Upgrade Your Setup With{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-600">
              Premium Tech
            </span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed transition-colors">
            Discover our curated collection of high-performance gear designed
            for creators, developers, and tech enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button className="px-8 py-4 text-lg group">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="px-8 py-4 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors duration-300 border border-transparent hover:border-violet-100 dark:hover:border-gray-700 shadow-sm"
              >
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 shadow-sm transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 transition-colors">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
