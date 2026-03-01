const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-shadow ${className}`}
      {...props}
    />
  );
};

export default Input;
