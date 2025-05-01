import React, { useState } from 'react';
import BlogCard from './BlogCard';
import TagFilter from './TagFilter';
import { Link } from 'react-router-dom';
import { dummyBlogs } from "../data/DummyBlogs";

const allTags = [...new Set(dummyBlogs.flatMap((blog) => blog.tags))];

const BlogGrid = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = dummyBlogs.filter((blog) => {
    const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search blog titles or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
        <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
              No blog posts found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;