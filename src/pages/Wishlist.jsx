import { useWishlist } from "../hooks/useWishlist";
import EmptyState from "../components/common/EmptyState";
import ProductCard from "../components/common/ProductCard";
import { Heart } from "lucide-react";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmptyState
          icon={<Heart className="w-12 h-12" />}
          message="Your wishlist is empty"
          subMessage="Save items you love here for later."
          actionText="Discover Products"
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex items-center gap-3 mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Your Wishlist
        </h1>
        <span className="bg-red-100 text-red-600 py-1 px-3 rounded-full text-sm font-bold">
          {wishlist.length} Items
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
