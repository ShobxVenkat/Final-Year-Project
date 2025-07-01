import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const MobileMenu = ({ isOpen, navItems, onClose }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 backdrop-blur-lg"
      style={{ top: "90px" }}
      onClick={onClose}
    >
      <div className="flex flex-col h-[calc(100vh-90px)] bg-gray-900/30 border-t border-orange-500/20">
        <div className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-gray-700/50">
            {navItems.map((item, index) => (
              <li key={index} className="px-6">
                <div className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(index);
                        }}
                        className="flex items-center justify-between py-4 text-lg font-medium text-gray-100 w-full hover:text-orange-400 transition-colors"
                      >
                        <span>{item.name}</span>
                        {openDropdownIndex === index ? (
                          <FiChevronUp className="text-orange-400" />
                        ) : (
                          <FiChevronDown className="text-gray-400" />
                        )}
                      </button>

                      <AnimatePresence>
                        {openDropdownIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-2 space-y-3">
                              {item.dropdown.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="block py-3 px-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all group"
                                  onClick={onClose}
                                >
                                  <div className="flex items-start">
                                    <div className="text-orange-500 mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-white group-hover:text-orange-300 transition-colors">
                                        {subItem.title}
                                      </h4>
                                      <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300">
                                        {subItem.subtitle}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="py-6 text-lg font-medium text-gray-100 hover:text-orange-400 transition-colors block"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
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
