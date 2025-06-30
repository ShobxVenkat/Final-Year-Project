import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const MobileMenu = ({ isOpen, navItems, onClose }) => {
  // Close menu when screen size becomes lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-40 backdrop-blur-lg" 
      style={{ top: "60px" }}
      onClick={onClose}
    >
      <div className="flex flex-col h-[calc(100vh-76px)] bg-gray-900/30 border-t border-orange-500/20">
        <div className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-gray-700/50">
            {navItems.map((item, index) => (
              <li key={index} className="px-6">
                <Link
                  to={item.path}
                  className="py-6 text-lg font-medium text-gray-100 hover:text-orange-400 transition-colors block"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            
          </ul>
        </div>

        {/* Sticky Bottom Buttons */}
        <div className="sticky bottom-0 left-0 right-0 px-4 py-6 border-t border-gray-700/50 bg-gray-900 grid grid-cols-2 gap-4">
          <Link
            to="/cart"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full px-6 py-3 shadow-lg transition-all"
            onClick={onClose}
          >
            <FaShoppingCart className="mr-2 text-orange-400" />
            Cart
          </Link>
          <Link
            to="/login"
            className="text-center bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-orange-500/20 transition-all"
            onClick={onClose}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;