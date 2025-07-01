import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";
import {
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaHome,
  FaBookOpen,
  FaFire,
  FaShoppingCart,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Auctions", path: "/auctions" },
  { name: "Shop", path: "/shop" },
  {
    name: "Categories",
    path: "/categories",
    dropdown: [
      {
        icon: <FaTshirt className="text-orange-500 text-xl" />,
        title: "Fashion & Apparel",
        subtitle: "Clothing, shoes, accessories",
        href: "/shop/fashion",
      },
      {
        icon: <FaMobileAlt className="text-orange-500 text-xl" />,
        title: "Electronics",
        subtitle: "Phones, tablets, gadgets",
        href: "/shop/electronics",
      },
      {
        icon: <FaLaptop className="text-orange-500 text-xl" />,
        title: "Grocery & Essentials",
        subtitle: "Food, beverages, household items",
        href: "/shop/grocery",
      },
      {
        icon: <FaBookOpen className="text-orange-500 text-xl" />,
        title: "Beauty & Wellness",
        subtitle: "Skincare, makeup, health",
        href: "/shop/wellness",
      },
      {
        icon: <FaHome className="text-orange-500 text-xl" />,
        title: "Home & Appliances",
        subtitle: "Furniture, decor, appliances",
        href: "/shop/appliances",
      },
      {
        icon: <FaBookOpen className="text-orange-500 text-xl" />,
        title: "Sports & Fitness",
        subtitle: "Equipment, apparel, accessories",
        href: "/shop/sports",
      },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const closeAll = () => {
    setOpenDropdownIndex(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-8 lg:py-5 bg-[#0E0F1B]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center md:ml-15">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center"
              >
                <FaFire className="text-orange-500 text-2xl mr-2" />
                <span className="text-xl font-bold text-white">BidFlare</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-6 md:mr-15">
              <ul className="hidden lg:flex space-x-2">
                {NavLinks.map((link, index) => (
                  <li
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => link.dropdown && setOpenDropdownIndex(index)}
                    onMouseLeave={() => link.dropdown && setOpenDropdownIndex(null)}
                  >
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors group flex items-center space-x-1"
                        >
                          <span>{link.name}</span>
                          {/* <FiChevronDown className="text-sm" /> */}
                          <span
                            className={`absolute left-3 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-[calc(100%-1.5rem)] ${
                              openDropdownIndex === index
                                ? "w-[calc(100%-1.5rem)]"
                                : ""
                            } transition-all duration-300 ease-in`}
                          />
                        </button>

                        <AnimatePresence>
                          {openDropdownIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 15 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-1/2 transform -translate-x-1/2 w-80 bg-gray-900 border border-gray-700 p-4 rounded-lg shadow-xl z-50 mt-1"
                            >
                              <ul className="space-y-3">
                                {link.dropdown.map((subItem, subIndex) => (
                                  <li key={subIndex} className="text-left group">
                                    <Link
                                      to={subItem.href}
                                      className="flex items-start p-3 rounded-md transition-all duration-200 hover:bg-gray-800"
                                      onClick={closeAll}
                                    >
                                      <div className="mr-4 mt-1">{subItem.icon}</div>
                                      <div>
                                        <h4 className="text-white font-medium">{subItem.title}</h4>
                                        <p className="text-sm text-gray-400 mt-1">
                                          {subItem.subtitle}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors block group"
                      >
                        {link.name}
                        <span className="absolute left-3 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 ease-in"></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Cart Button */}
              <Link
                to="/cart"
                className="hidden lg:flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full px-4 py-2 shadow-lg transition-all"
              >
                <FaShoppingCart className="text-orange-500" />
                <span>Cart</span>
              </Link>

              {/* Login Button */}
              <Link
                to="/login"
                className="hidden lg:block bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full px-6 py-2 shadow-lg hover:shadow-orange-500/20 transition-all"
              >
                Login
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-gray-300 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <RxCross2 size={30} /> : <BiMenuAltRight size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} navItems={NavLinks} onClose={closeAll} />
    </>
  );
}
