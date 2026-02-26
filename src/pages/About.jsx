import { Target, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-600/20 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            About TechStore
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are passionate about connecting people with the technology that
            empowers their creativity and productivity.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight transition-colors">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors">
                Founded in 2026, TechStore began with a simple mission: to
                curate the best tech products from around the world and make
                them accessible to everyone. We noticed that high-end gear was
                often buried under overwhelming noise.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
                We bridge the gap between quality and accessibility. Every
                product in our store is hand-picked, tested, and vetted by our
                team of hardware enthusiasts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                  <div className="text-violet-600 dark:text-violet-400">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 transition-colors">
                      Our Mission
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">
                      Elevating everyday experiences through technology.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                  <div className="text-violet-600 dark:text-violet-400">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 transition-colors">
                      Our Vision
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">
                      To be the most trusted hub for tech enthusiasts globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-linear-to-tr from-violet-100 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-colors"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="rounded-3xl shadow-xl w-full h-auto object-cover border border-white/50"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
