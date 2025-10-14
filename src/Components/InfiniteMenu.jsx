// src/Components/InfiniteMenu.jsx
import React, { useEffect, useState } from "react";

const InfiniteMenu = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Auto-rotate every 3 seconds
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[index];

  return (
    <div className="w-full h-full relative rounded-3xl overflow-hidden">
      {/* Image */}
      <img
        src={currentItem.image}
        alt={currentItem.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      {/* Overlay Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-4 text-center">
        <h3 className="text-xl font-bold">{currentItem.title}</h3>
        <p className="text-sm opacity-80">{currentItem.description}</p>
      </div>

      {/* Link (optional) */}
      {currentItem.link && (
        <a
          href={currentItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label={currentItem.title}
        />
      )}
    </div>
  );
};

export default InfiniteMenu;
