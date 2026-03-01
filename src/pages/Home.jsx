import {
  ArrowRight,
  Cpu,
  Headphones,
  Monitor,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Laptops & PCs",
    icon: Monitor,
    color: "text-lime-400",
    bg: "bg-lime-400/10",
  },
  {
    name: "Smartphones",
    icon: Smartphone,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    name: "Audio Gear",
    icon: Headphones,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    name: "PC Components",
    icon: Cpu,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    desc: "Get your tech gear delivered at warp speed.",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    desc: "Your data is encrypted and completely safe with us.",
  },
  {
    icon: Cpu,
    title: "Top Tier Brands",
    desc: "We only stock the best hardware in the industry.",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white m-2 rounded-xl min-h-screen px-6 md:px-20 py-20 flex flex-col gap-32 overflow-hidden">
      <section className="flex flex-col items-center justify-center text-center mt-10 md:mt-20 relative">
        <div className="absolute w-[800px] h-[800px] bg-lime-500/10 blur-[120px] rounded-full -top-40 -z-10 animate-pulse hidden md:block" />

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
          Equip Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-lime-400 to-sky-400">
            Digital Workflow.
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
          The ultimate destination for developers, creators, and tech
          enthusiasts. Discover premium hardware designed to elevate your craft.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/products"
            className="group flex items-center justify-center gap-2 border border-lime-400 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            Shop Now
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
          <Link
            to="/about"
            className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border border-gray-800 text-white hover:border-gray-600 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Shop by Category
          </h2>
          <Link
            to="/products"
            className="text-gray-400 hover:text-white transition-colors hidden md:flex items-center gap-1 group"
          >
            View All{" "}
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-8 bg-zinc-950 rounded-2xl border border-gray-900 hover:border-gray-800 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div
                  className={`p-4 rounded-full ${cat.bg} ${cat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors">
                  {cat.name}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex flex-col items-start gap-4 p-6">
              <div className="p-3 bg-white/5 rounded-xl border border-gray-800 text-lime-400">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
