import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 md:px-10">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <span className="text-xl font-semibold text-white">BidFlare</span>
      </div>
      <ul className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-300">
        <li>
          <Link to="/auctions" className="hover:text-white transition">Auctions</Link>
        </li>
        <li>
          <Link to="/shop" className="hover:text-white transition">Shop</Link>
        </li>
        <li>
          <Link to="/categories" className="hover:text-white transition">Categories</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-white transition">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
