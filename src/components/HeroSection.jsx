import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to <span className="text-blue-600 dark:text-blue-400">Blog World</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
            "Explore the tools, skills, and strategies every future developer needs to succeed."
          </p>
          <Link
            to="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
          >
            Explore Blogs
          </Link>
        </div>
        <img
          src="https://morethanaflower.com/wp-content/uploads/2019/07/Welcome-to-the-blog2.jpg"
          className="w-full md:w-[400px] mt-10 md:mt-0 rounded-xl shadow-lg"
          alt="Welcome to the blog"
        />
      </div>
    </section>
  );
};

export default HeroSection;
