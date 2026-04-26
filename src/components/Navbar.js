import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative z-20">
      <div className="flex items-center space-x-2">
        {/* <div className="w-6 h-6 bg-violet-600 rounded-md"></div> */}
        {/* <Link to="/" className="font-bold text-lg text-white">
          ReviewGuard AI
        </Link> */}
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className={`px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive('/') ? 'text-violet-400 bg-violet-900/30' : 'text-gray-300 hover:text-violet-400'
          }`}
        >
          Home
        </Link>
        <Link
          to="/detect"
          className={`px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive('/detect') ? 'text-violet-400 bg-violet-900/30' : 'text-gray-300 hover:text-violet-400'
          }`}
        >
          Detect Review
        </Link>
        <Link
          to="/upload"
          className={`px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive('/upload') ? 'text-violet-400 bg-violet-900/30' : 'text-gray-300 hover:text-violet-400'
          }`}
        >
          Upload File
        </Link>
        {/* <Link
          to="/about"
          className={`px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive('/about') ? 'text-violet-400 bg-violet-900/30' : 'text-gray-300 hover:text-violet-400'
          }`}
        >
          About
        </Link> */}
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-violet-400 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-black/90 border-t border-gray-700">
          <div className="px-6 py-4 space-y-2">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-violet-400 transition">Home</Link>
            <Link to="/detect" className="block px-3 py-2 text-gray-300 hover:text-violet-400 transition">Detect Review</Link>
            <Link to="/upload" className="block px-3 py-2 text-gray-300 hover:text-violet-400 transition">Upload File</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-violet-400 transition">About</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;