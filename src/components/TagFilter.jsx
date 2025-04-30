import React from 'react';

const TagFilter = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
      <button
        onClick={() => onSelectTag(null)}
        className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
          selectedTag === null
            ? 'bg-blue-600 text-white'
            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
            selectedTag === tag
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300'
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;