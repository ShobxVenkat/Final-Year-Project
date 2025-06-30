import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaFire, FaShoppingCart } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Auctions", path: "/auctions" },
  { name: "Shop", path: "/shop" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeAll = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-4 bg-[#0E0F1B]">
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

            {/* Desktop Navigation  */}
            <div className="flex items-center space-x-6 md:mr-15">
              <ul className="hidden lg:flex space-x-2 ">
                {NavLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors block group"
                    >
                      {link.name}
                      <span className="absolute left-3 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 ease-in"></span>
                    </Link>
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

              {/* Desktop Login Button */}
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
                {isMobileMenuOpen ? (
                  <RxCross2 size={24} />
                ) : (
                  <BiMenuAltRight size={28} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navItems={NavLinks}
        onClose={closeAll}
      />
    </>
  );
}