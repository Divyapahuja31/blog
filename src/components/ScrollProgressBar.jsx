import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const updateScrollProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const totalScroll = scrollHeight - clientHeight;
    const scroll = (scrollTop / totalScroll) * 100;
    setScrollPercent(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-200 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;