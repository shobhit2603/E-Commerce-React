const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer";
  const variants = {
    primary: "text-black bg-lime-400 hover:bg-lime-600",
    secondary:
      "text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
