const Badge = ({ count }) => {
  if (!count || count <= 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center shadow-sm animate-bounce">
      {count > 99 ? "99+" : count}
    </span>
  );
};

export default Badge;
