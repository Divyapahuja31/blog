import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, excerpt, image, author, date, id }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{excerpt}</p>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
        <div className="mt-3">
          <Link
            to={`/blog/${id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
