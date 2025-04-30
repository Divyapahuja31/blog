import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const featuredBlogs = [
  {
    title: "The Rise of Modern Web Apps",
    excerpt: "Discover how web applications evolved from simple pages to dynamic, immersive experiences.",
    image: "https://source.unsplash.com/featured/?technology,web",
  },
  {
    title: "JavaScript: Then and Now",
    excerpt: "A quick dive into JavaScript's evolution and its growing ecosystem.",
    image: "https://source.unsplash.com/featured/?javascript,code",
  },
];

const First = () => {
  const { id } = useParams();
  const blog = featuredBlogs[id];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <div className="text-blue-400 font-semibold mb-2">Technology</div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <span className="mr-4">📅 April 15, 2025</span>
        <span>⏱ 6 min read</span>
      </div>
      <img src={blog.image} alt={blog.title} className="rounded-xl w-full mb-8" />

      <h2 className="text-xl font-semibold mb-4">From Static Pages to Dynamic Applications</h2>
      <p className="mb-4">
        Web development has evolved from simple HTML pages to complex applications powered by frameworks like React, Angular, and Vue.
        This transformation has enabled faster performance and more immersive experiences.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Augmented and virtual reality on the web, opening new possibilities</li>
        <li>Edge computing bringing computation closer for speed</li>
      </ul>
      <p className="mb-6">
        By understanding history and staying current with trends, developers create modern experiences that push the boundaries.
      </p>

      <div className="flex gap-2 flex-wrap mb-10">
        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Web Development</span>
        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Programming</span>
        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
      </div>

      <div className="flex justify-between border-t border-gray-600 pt-4 text-gray-400 text-sm mb-10">
        <span>♡ Like</span>
        <span>💬 Comment</span>
        <span>🔗 Share</span>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 mb-10">
        <img
          src="https://randomuser.me/api/portraits/women/75.jpg"
          alt="author"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-bold">Sarah Johnson</h3>
          <p className="text-sm text-gray-400">Tech enthusiast & web developer. Passionate about UX and clean design.</p>
          <div className="flex gap-4 mt-2 text-gray-400 text-sm">
            <span>🐦</span>
            <span>💼</span>
            <span>🔗</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredBlogs.slice(0, 2).map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default First;
