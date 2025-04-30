import React, { useState } from 'react';
import BlogCard from './BlogCard';
import TagFilter from './TagFilter';
import { Link } from 'react-router-dom';

const dummyBlogs = [
  {
    title: 'Mastering React in 30 Days',
    excerpt: 'A step-by-step guide to becoming a React expert from scratch.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQH4_slzWZgtOg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1665586047227?e=2147483647&v=beta&t=EYthV_LwHSV3UOwQ23DrstYKTwiD8O7Hu0ugA7j9Cco',
    author: 'Divya Pahuja',
    date: 'April 30, 2025',
    tags: ['React', 'Frontend'],
  },
  {
    title: 'CSS Tips & Tricks',
    excerpt: 'Learn how to make your website stand out with modern CSS.',
    image: 'https://www.webfx.com/wp-content/uploads/2021/10/unnamed-file.CSS-1.jpg',
    author: 'John Doe',
    date: 'April 25, 2025',
    tags: ['CSS', 'Design'],
  },
  {
    title: 'Why JavaScript is Everywhere',
    excerpt: 'Explore how JavaScript powers the web, mobile, and beyond.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDb4YLtgaMs8qOY2nOZaK3S_PsbOXgSSDg7Q&s',
    author: 'Jane Smith',
    date: 'April 20, 2025',
    tags: ['JavaScript', 'Web'],
  },
  {
    title: 'DSA for Beginners',
    excerpt: 'Understand data structures and algorithms with real-life analogies.',
    image: 'https://www.placementpreparation.io/blog/cdn-cgi/image/metadata=keep,quality=60/wp-content/uploads/2024/04/dsa-project-ideas-for-beginners.webp',
    author: 'Code Mentor',
    date: 'April 15, 2025',
    tags: ['DSA', 'Programming'],
  },
  {
    title: 'Top 5 GitHub Repos for B.Tech Students',
    excerpt: 'These open-source repositories will boost your coding journey.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAq8y0V7Dd-_KqqZn3GdNxZSz4AasI8zdZ7A&s',
    author: 'Dev Guide',
    date: 'April 10, 2025',
    tags: ['GitHub', 'Open Source'],
  },
  {
    title: 'Building Your First Portfolio Website',
    excerpt: 'A complete walkthrough to create a professional developer portfolio.',
    image: 'https://cdn.sanity.io/images/v6oximkk/production/7b1f7e6f57bd1d7652f546450b2808c5dd6ecc00-1024x504.png?w=1024&h=504&auto=format',
    author: 'Portfolio Pro',
    date: 'April 8, 2025',
    tags: ['Portfolio', 'Web Dev'],
  },
  {
    title: 'VS Code Extensions Every Student Should Know',
    excerpt: 'Boost your coding speed with these productivity-enhancing tools.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlffgOV2Cu4sp_eeQDbWbBDN6hYkJH6OU4A&s',
    author: 'Toolbox Dev',
    date: 'April 5, 2025',
    tags: ['Productivity', 'Tools'],
  },
  {
    title: 'Internship Guide for 2nd Year Students',
    excerpt: 'Find, apply, and land the best internships early in your degree.',
    image: 'https://imgv2-2-f.scribdassets.com/img/document/769017163/original/361b239d98/1?v=1',
    author: 'Career Ninja',
    date: 'April 2, 2025',
    tags: ['Career', 'Internship'],
  },
  {
    title: 'How to Stay Consistent with Coding',
    excerpt: 'Tips to maintain momentum in daily coding challenges.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqM9HRynfp9xRQpQEUYUHO2on6E1OUxP-abA&s',
    author: 'Habits Weekly',
    date: 'March 30, 2025',
    tags: ['Consistency', 'Habits'],
  },
  {
    title: 'Understanding API Integration',
    excerpt: 'Learn how APIs work and how to connect them in your projects.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCwKCO54MRFDhKQcm6PTz5M2oIt3OQPxp_A&s',
    author: 'Tech Simplified',
    date: 'March 28, 2025',
    tags: ['API', 'Backend'],
  },
  {
    title: 'Node.js Crash Course',
    excerpt: 'Start building servers and full-stack apps using Node.js.',
    image: 'https://cdn.fs.teachablecdn.com/UBiqMLppSEihUD5LI7BA',
    author: 'FullStackDev',
    date: 'March 26, 2025',
    tags: ['Node.js', 'Backend'],
  },
  {
    title: 'Git & GitHub Essentials',
    excerpt: 'Version control is essential. Learn it properly with this guide.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwD6TmEcjOFhhqqfcC8hUmKH9Y2JuAj1vxzQ&s',
    author: 'Code Keeper',
    date: 'March 23, 2025',
    tags: ['Git', 'Tools'],
  },
  {
    title: 'Best Resources for Competitive Programming',
    excerpt: 'Boost your problem-solving game with these handpicked resources.',
    image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F89qxhwrnv2lrykkma4ax.png',
    author: 'Algo Champ',
    date: 'March 20, 2025',
    tags: ['CP', 'DSA'],
  },
  {
    title: 'Top YouTube Channels for CS Students',
    excerpt: 'Learn from the best mentors on YouTube for free!',
    image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5p69536d9qj0i1kngr9m.png',
    author: 'Media Mentor',
    date: 'March 18, 2025',
    tags: ['Learning', 'Video'],
  },
  {
    title: 'Creating a Blog with React & Firebase',
    excerpt: 'Step-by-step guide to launch your own blog using Firebase backend.',
    image: 'https://i.ytimg.com/vi/zL0dKETbCNE/maxresdefault.jpg',
    author: 'Dev Builder',
    date: 'March 15, 2025',
    tags: ['React', 'Firebase'],
  },
  {
    title: 'Hackathons: Why & How to Join One',
    excerpt: 'Build, learn, and win — everything you need to know about hackathons.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240528171613/How-To-Ace-Hackathons-copy.webp',
    author: 'Event Pro',
    date: 'March 10, 2025',
    tags: ['Hackathon', 'Experience'],
  },
  {
    title: 'Top Coding Platforms Compared',
    excerpt: 'LeetCode, Codeforces, HackerRank — which one suits you?',
    image: 'https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2025/03/best-coding-platforms-for-kids.jpg',
    author: 'Code Battle',
    date: 'March 7, 2025',
    tags: ['Coding', 'Comparison'],
  },
  {
    title: 'Intro to Machine Learning with Python',
    excerpt: 'Your first ML project made easy with scikit-learn.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMrRuosNLzzc31R2Htdq7haDVlO-UiHB_-A&s',
    author: 'AI Starter',
    date: 'March 5, 2025',
    tags: ['ML', 'Python'],
  },
  {
    title: 'Resume Building for Tech Students',
    excerpt: 'Make your resume stand out to recruiters and companies.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRyivRUc6KrOPrx41LQpzQ0T5KLtUyDaVtA&s',
    author: 'Resume Expert',
    date: 'March 3, 2025',
    tags: ['Career', 'Resume'],
  },
  {
    title: 'Final Year Project Ideas',
    excerpt: 'Top innovative projects you can start working on today.',
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220731171335/5-Project-Ideas-For-Final-Year-Students.jpg',
    author: 'Project Vault',
    date: 'March 1, 2025',
    tags: ['Project', 'Ideas'],
  },
  {
    title: 'Time Management for Tech Students',
    excerpt: 'Learn to balance coding, classes, and self-study effectively.',
    image: 'https://thumbs.dreamstime.com/b/businessman-holding-clock-work-life-balance-life-goal-icons-time-management-work-planning-businessman-holding-clock-288619288.jpg',
    author: 'Time Mastery',
    date: 'March 28, 2025',
    tags: ['Productivity', 'Time Management'],
  },
  {
    title: 'Daily Routine of a Successful CS Student',
    excerpt: 'Design your ideal productive day using proven routines.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5ZYvyShvGMHTYaf6ZJ9xv6fylAIyF5ywaA&s',
    author: 'Student Life Hacks',
    date: 'March 25, 2025',
    tags: ['Routine', 'Productivity'],
  },
  {
    title: 'Top Podcasts Every Developer Should Follow',
    excerpt: 'Learn from tech experts while commuting or walking.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHBuNr3HBDHF8_9O0LhhG8Wuwc2LUDeFJfA&s',
    author: 'Audio Learner',
    date: 'March 22, 2025',
    tags: ['Podcasts', 'Learning'],
  },
  {
    title: 'AI Tools Every Student Should Use',
    excerpt: 'Discover the AI-powered tools that make study smarter and faster.',
    image: 'https://nextr.in/blog/wp-content/uploads/2024/05/AI-1024x730.jpeg',
    author: 'Smart Tech',
    date: 'March 20, 2025',
    tags: ['AI', 'Tools'],
  },
  {
    title: 'How to Track Your Coding Progress',
    excerpt: 'Use journals and trackers to monitor and improve your skills.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPKVNkrMSB_qUYkRrCa05RToz8j_Pp0jhkw&s',
    author: 'Skill Tracker',
    date: 'March 18, 2025',
    tags: ['Tracking', 'Learning'],
  },
  {
    title: 'Learn Git & GitHub Fast',
    excerpt: 'Collaborate like a pro with version control basics.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfbcK4sW2Hegq75KhpMSe2nQun0XWHh3jfA&s',
    author: 'OpenSource Hub',
    date: 'March 12, 2025',
    tags: ['Git', 'Version Control'],
  },
  {
    title: 'Reading Tech News Smartly',
    excerpt: 'Stay updated without spending hours scrolling news feeds.',
    image: 'https://media.istockphoto.com/id/1280129533/photo/young-woman-at-home-is-using-laptop-computer-for-scrolling-and-reading-news-about.jpg?s=612x612&w=0&k=20&c=tPYKgzn-Mq6mCjaPWKAP936RzupOBTvQ8fnAKNO_FsU=',
    author: 'News Digest',
    date: 'March 8, 2025',
    tags: ['News', 'Awareness'],
  },
  {
    title: 'The Power of Note-Taking in Tech Learning',
    excerpt: 'Why structured notes make you a better developer.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLEOOpGS5GsTqht8yjMHX8HxRUXXF5Fncuw&s',
    author: 'Note Nerd',
    date: 'March 5, 2025',
    tags: ['Note-taking', 'Learning'],
  },
  {
    title: 'Mind Mapping for Technical Concepts',
    excerpt: 'Visual learners can grasp code logic better with mind maps.',
    image: 'https://cdn.create.vista.com/downloads/28d84a6e-8b03-48a3-8e92-e6f718f9fb1d_640.jpeg',
    author: 'Visual Coders',
    date: 'March 1, 2025',
    tags: ['Mind Mapping', 'Study Skills'],
  },
];
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