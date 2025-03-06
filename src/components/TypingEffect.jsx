import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <h1 className={`break-words text-center ${className}`}>{displayedText}</h1>;
};

export default TypingEffect;
