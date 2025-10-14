import React, { useState, useEffect } from "react";

const TextType = ({ 
  text, 
  typingSpeed = 50, 
  showCursor = true, 
  cursorCharacter = "|" 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Combine all sentences into one long string
  const fullText = Array.isArray(text) ? text.join(" ") : text;

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText, typingSpeed]);

  return (
    <span>
      {displayedText}
      {showCursor && charIndex < fullText.length && (
        <span className="text-green-500">{cursorCharacter}</span>
      )}
    </span>
  );
};

export default TextType;
