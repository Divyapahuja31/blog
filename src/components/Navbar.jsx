
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wide">
          Blog World
        </div>

        <div className="space-x-6 hidden md:flex">
          <NavLink to="/" className="text-white hover:text-white transition">Home</NavLink>
          <NavLink to="/blog" className="text-white hover:text-white transition">Blogs</NavLink>
          <NavLink to="/about" className="text-white hover:text-white transition">About</NavLink>
          <NavLink to="/contact" className="text-white hover:text-white transition">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
