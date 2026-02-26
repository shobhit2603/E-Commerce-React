import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Button from "./Button";

const EmptyState = ({
  message = "Your cart is empty",
  subMessage = "Looks like you haven't added anything yet.",
  icon,
  actionLink = "/products",
  actionText = "Go Shopping",
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center min-h-[50vh] bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
      <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center mb-6 text-violet-600 shadow-inner">
        {icon || <ShoppingBag className="w-12 h-12" />}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{message}</h2>
      <p className="text-gray-500 mb-8 max-w-md">{subMessage}</p>
      {actionLink && (
        <Link to={actionLink}>
          <Button label={actionText} />
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
