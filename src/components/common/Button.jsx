import { Loader2 } from "lucide-react";

const Button = ({
  label,
  onClick,
  loading,
  disabled,
  type = "button",
  className = "",
  variant = "primary",
  children,
}) => {
  const baseStyles =
    "relative flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden";

  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-700 text-white shadow-md hover:shadow-lg focus:ring-violet-500",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300",
    outline:
      "border-2 border-violet-600 text-violet-600 hover:bg-violet-50 focus:ring-violet-500",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-md focus:ring-red-500",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseStyles} ${variants[variant]} ${sizes.md} ${isDisabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
      {children || label}
    </button>
  );
};

export default Button;
