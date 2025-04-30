import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredBlogs = [
    {
      title: 'The Future of AI in Web Development',
      image: 'https://dmwebsoft.com/wp-content/uploads/2024/09/The-Application-of-Artificial-Intelligence-in-Web-Development-Present-and-Future-Opportunities-DM-WebSoft-LLP.webp',
      excerpt: 'Explore how AI will revolutionize web apps and user experiences.',
    },
    {
      title: 'Top 10 Tailwind Tricks',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*cuQ5zNN0gVuHfPFKh9smSQ.png',
      excerpt: 'Boost your UI game with these Tailwind CSS tips.',
    },
    {
      title: 'React Performance Hacks',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*PRSCPASXfR-Kc4sQ_0ZSKw.jpeg',
      excerpt: 'Learn how to make your React apps blazing fast.',
    },
   
    {
      title: 'Essential GitHub Repos for B.Tech Students',
      image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2024/08/Top-10-GitHub-Repositories-to-Master-Statistics-01-scaled.webp',
      excerpt: 'These open-source repositories will boost your coding journey.',
    },
    
    {
      title: 'How to Stay Consistent with Coding Challenges',
      image: 'https://williamcareyuniversity.co.in/uploads/2025/02/master-coding-how-many-hours-a-day-should-you-practice.webp',
      excerpt: 'Tips and tricks for maintaining your coding streak and learning regularly.',
    },
    {
      title: 'Best Resources for Competitive Programming',
      image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F89qxhwrnv2lrykkma4ax.png',
      excerpt: 'Top websites and resources to sharpen your competitive programming skills.',
    },
  ];
  

const FeaturedCarousel = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Featured Posts 
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {featuredBlogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCarousel;