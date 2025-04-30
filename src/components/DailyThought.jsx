import React, { useEffect, useState } from 'react';

const thoughts = [
  "Write something worth reading, or do something worth writing. – Benjamin Franklin",
  "Creativity takes courage. – Henri Matisse",
  "A word after a word after a word is power. – Margaret Atwood",
  "Start writing, no matter what. The water does not flow until the faucet is turned on. – Louis L’Amour",
  "Your story matters. Keep writing it."
];

const DailyThought = () => {
  const [thought, setThought] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * thoughts.length);
    setThought(thoughts[random]);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 text-center p-4  shadow-md ">
      <p className="text-lg font-medium text-gray-700 dark:text-gray-100 italic">"{thought}"</p>
    </div>
  );
};

export default DailyThought;