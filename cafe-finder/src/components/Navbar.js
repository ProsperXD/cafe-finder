'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter">
          Steph Cafes
          <span className="block text-xs tracking-wide text-center">Global</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/shop" className="text-sm font-medium uppercase hover:text-gray-300 transition-colors">
            Shop
          </Link>

          <div className="relative group">
            <button
              className="text-sm font-medium uppercase flex items-center hover:text-gray-300 transition-colors"
              onClick={() => toggleDropdown('explore')}
            >
              Explore
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'explore' && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 shadow-lg z-10 rounded">
                <Link href="/explore/new" className="block px-4 py-2 text-sm hover:bg-gray-700">
                  New Arrivals
                </Link>
                <Link href="/explore/popular" className="block px-4 py-2 text-sm hover:bg-gray-700">
                  Popular Items
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm font-medium uppercase hover:text-gray-300 transition-colors">
            About
          </Link>

          <Link href="/contact" className="text-sm font-medium uppercase hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
        </div>

        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-2">
          <div className="container mx-auto px-4 space-y-3">
            <Link href="/shop" className="block text-sm font-medium py-2">
              Shop
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-sm font-medium py-2"
                onClick={() => toggleDropdown('mobile-explore')}
              >
                <span>Explore</span>
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-explore' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'mobile-explore' && (
                <div className="pl-4 mt-1 space-y-2 border-l border-gray-700">
                  <Link href="/explore/new" className="block text-sm py-1 text-gray-300">
                    New Arrivals
                  </Link>
                  <Link href="/explore/popular" className="block text-sm py-1 text-gray-300">
                    Popular Items
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="block text-sm font-medium py-2">
              About
            </Link>

            <Link href="/contact" className="block text-sm font-medium py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
