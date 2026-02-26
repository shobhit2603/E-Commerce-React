const Input = ({
  label,
  placeholder,
  id,
  onChange,
  value,
  type = "text",
  required = false,
  className = "",
  error,
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 rounded-xl border ${error ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-violet-500"} bg-white text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default Input;
