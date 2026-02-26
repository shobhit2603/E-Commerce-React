import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { borderRadius: "12px", background: "#333", color: "#fff" },
        }}
      />
      <Navbar />
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
