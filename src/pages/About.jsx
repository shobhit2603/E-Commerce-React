import { Code2, Database, Layout, Terminal } from "lucide-react";

const About = () => {
  return (
    <div className="bg-black text-white m-2 rounded-xl min-h-[85vh] px-6 md:px-20 py-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full -top-40 -z-10 animate-pulse hidden md:block" />

      <div className="max-w-4xl w-full flex flex-col gap-12">
        {/* Intro Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Building scalable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-lime-400">
              web solutions.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            Hi, I'm a developer passionate about crafting high-performance,
            beautiful, and intuitive user interfaces. I specialize in turning
            complex problems into elegant digital experiences.
          </p>
        </div>

        <div className="w-full h-px bg-gray-800" />

        {/* Project Details */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">
              About This Project
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              ShopIt is a conceptual e-commerce web store tailored specifically
              for tech enthusiasts and developers. It is built entirely on the
              frontend using{" "}
              <span className="text-sky-400 font-semibold">React.js</span> to
              deliver a lightning-fast shopping experience.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4">
              To simulate a full shopping experience without a backend, this
              project cleverly leverages{" "}
              <span className="text-lime-400 font-semibold">Local Storage</span>{" "}
              for robust state management, handling carts, wishlists, and user
              sessions seamlessly on the client side.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-zinc-950/50 rounded-2xl border border-gray-900 hover:border-gray-700 transition-colors">
              <Code2 className="text-sky-400 mb-3" size={28} />
              <span className="text-sm font-medium text-gray-300">
                React.js
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 bg-zinc-950/50 rounded-2xl border border-gray-900 hover:border-gray-700 transition-colors">
              <Layout className="text-lime-400 mb-3" size={28} />
              <span className="text-sm font-medium text-gray-300">
                Tailwind CSS
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 bg-zinc-950/50 rounded-2xl border border-gray-900 hover:border-gray-700 transition-colors">
              <Database className="text-pink-500 mb-3" size={28} />
              <span className="text-sm font-medium text-gray-300">
                Local Storage
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 bg-zinc-950/50 rounded-2xl border border-gray-900 hover:border-gray-700 transition-colors">
              <Terminal className="text-blue-500 mb-3" size={28} />
              <span className="text-sm font-medium text-gray-300">
                Tech Centric
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
