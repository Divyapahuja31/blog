import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar/>
    <div className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">About BlogVerse</h1>

        <p className="text-lg leading-relaxed text-justify">
          <strong>BlogVerse</strong> is a modern, minimal, and immersive blogging platform crafted to inspire writers and engage readers. It’s not just a blog — it’s a movement to make publishing easy, beautiful, and meaningful for everyone.
        </p>

        {/* Mission & Vision */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🌟 Mission & Vision</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Empower every voice to be heard, without technical barriers.</li>
            <li>Encourage authentic, creative, and thoughtful content sharing.</li>
            <li>Provide a beautiful and responsive experience on every device.</li>
            <li>Make writing fun, personal, and even therapeutic for creators.</li>
          </ul>
        </section>

        {/* Platform Goals */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🚀 Platform Goals</h2>
          <p className="text-gray-700 dark:text-gray-300">
            BlogVerse aims to:
            <br />
            - Foster a welcoming space for writers of all skill levels.
            <br />
            - Deliver thoughtful design with minimal distractions.
            <br />
            - Add features like mood-based writing, a blogging calendar, and daily inspiration.
            <br />
            - Serve as a creative playground and digital journal for self-expression.
          </p>
        </section>

        {/* What Makes BlogVerse Unique */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🎨 What Makes BlogVerse Unique?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
        
            <li>🌅 Daily thoughts & affirmations for creative motivation.</li>
            <li>🌙 Fully responsive with seamless dark mode support.</li>
            <li>📚 Clean typography for distraction-free reading.</li>
            <li>🔗 Easy navigation & component-based scalable design.</li>
          </ul>
        </section>

        {/* Technologies */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🛠️ Technologies Used</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Frontend:</strong> React, Vite, Tailwind CSS, React Router<br />
            <strong>Components:</strong> Chakra UI (optional), Recharts (for insights), Custom Hooks<br />
            <strong>Deployment:</strong> GitHub Pages / Vercel (depending on preference)
          </p>
        </section>

        {/* Creator Info */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">👩‍💻 Meet the Creator</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Hi! I’m <strong>Divya Pahuja</strong>, a B.Tech Computer Science student with a passion for web development and mental wellness. I built BlogVerse as a personal challenge to combine clean UI, useful features, and emotional intelligence into a blogging experience. My goal? Build things that empower, heal, and inspire.
          </p>
        </section>

        {/* Community */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🤝 Join the Movement</h2>
          <p className="text-gray-700 dark:text-gray-300">
            BlogVerse isn't just a blog platform — it's a space to grow, reflect, and share. As the platform evolves, I hope to welcome other creators who care about self-expression, clarity, and well-being.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to start your writing journey?</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Jump into the blog section, add your first entry, or explore what others have shared!</p>
          <a href="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
            Explore Blogs
          </a>
        </section>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default About;