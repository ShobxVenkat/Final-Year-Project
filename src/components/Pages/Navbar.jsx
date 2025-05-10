
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <span className="text-xl font-semibold text-white">BidFlare</span>
      </div>
      <ul className="flex space-x-6 text-sm text-gray-300">
        <li className="hover:text-white cursor-pointer">Auctions</li>
        <li className="hover:text-white cursor-pointer">Shop</li>
        <li className="hover:text-white">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
