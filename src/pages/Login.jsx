import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      login();
      navigate("/");
    }
  };

  return (
    <div className="bg-black text-white m-2 rounded-xl min-h-[80vh] flex items-center justify-center relative overflow-hidden">

      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl shadow-2xl z-10 mx-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-16 h-16 bg-lime-400/10 rounded-full flex items-center justify-center mb-4">
            <LogIn className="text-lime-400" size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-gray-400 mt-2 text-center">
            Login to access your cart, wishlist, and manage products.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-300"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="bg-black/50 border border-zinc-700 text-white rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-black/50 border border-zinc-700 text-white rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-lime-400 text-black font-bold rounded-lg p-3 hover:bg-lime-500 transition-colors duration-500 flex items-center justify-center gap-2 group cursor-pointer"
          >
            Login
            <LogIn
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
