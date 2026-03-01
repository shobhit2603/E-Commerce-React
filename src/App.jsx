import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

const App = () => {
  return (
    <main className="select-none scroll-smooth overflow-hidden">
      <Navbar />
      <Toast />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
