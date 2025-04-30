import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-gray-900 text-text py-6  border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} BlogWorld. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;