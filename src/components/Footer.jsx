import React from 'react';
import { Github, Linkedin, ArrowUpRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-gray-900 text-text py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
     
        <div className="md:text-left text-center">
          <h3 className="text-lg font-medium text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition flex justify-center md:justify-start items-center gap-1">
                Home <ArrowUpRight size={14} />
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition flex justify-center md:justify-start items-center gap-1">
                Blog <ArrowUpRight size={14} />
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition flex justify-center md:justify-start items-center gap-1">
                About <ArrowUpRight size={14} />
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition flex justify-center md:justify-start items-center gap-1">
                Contact <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-white">BlogWorld</h2>
          <p className="text-sm text-gray-400 mt-2">
            Crafted with ❤️ for curious minds.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} BlogWorld. All rights reserved.
          </p>
        </div>

        <div className="md:text-right text-center">
          <h3 className="text-lg font-medium text-white mb-2">Connect</h3>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <a
              href="https://github.com/Divyapahuja31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/divya-pahuja25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
          <a
            href="#top"
            className="flex items-center justify-center md:justify-end gap-1 text-sm text-gray-400 hover:text-white transition"
          >
            <ArrowUp size={16} />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
