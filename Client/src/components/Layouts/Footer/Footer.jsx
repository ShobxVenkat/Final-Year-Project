import { Container } from '@mui/material';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiClock, FiMail, FiPhone, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1b2a] text-gray-400 border-t border-gray-800">
      <Container className="px-4 py-12">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                BidFlare
              </span>
            </h3>
            <p className="mb-6 leading-relaxed">
              Your premier destination for exclusive auctions. Discover rare items, place competitive bids, and win amazing deals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/live-auctions" className="hover:text-amber-400 transition-colors flex items-center">
                  <FiChevronRight className="mr-2 text-xs" /> Live Auctions
                </Link>
              </li>
              <li>
                <Link to="/upcoming" className="hover:text-amber-400 transition-colors flex items-center">
                  <FiChevronRight className="mr-2 text-xs" /> Upcoming Auctions
                </Link>
              </li>
              <li>
                <Link to="/featured" className="hover:text-amber-400 transition-colors flex items-center">
                  <FiChevronRight className="mr-2 text-xs" /> Featured Items
                </Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-amber-400 transition-colors flex items-center">
                  <FiChevronRight className="mr-2 text-xs" /> Sell With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="hover:text-amber-400 transition-colors flex items-center">
                  <FiChevronRight className="mr-2 text-xs" /> FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-amber-400 transition-colors flex items-center">
                  <FiChevronRight className="mr-2 text-xs" /> Shipping & Returns
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center">
                  <FiChevronRight className="mr-2 text-xs" /> Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-amber-400" />
                <span>Ayodhya, Uttar Pradesh 224001</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-amber-400" />
                <span>support@bidflare.com</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-amber-400" />
                <span>+91 9219180712</span>
              </li>
              <li className="flex items-center">
                <FiClock className="mr-3 text-amber-400" />
                <span>Mon-Fri : 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-amber-400 font-medium">BidFlare</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
            
            
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;