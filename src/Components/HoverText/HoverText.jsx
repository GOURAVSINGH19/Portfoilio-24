import React, { useState, useEffect } from 'react';

const AnimatedText = ({ children }) => {
  const [text, setText] = useState('');
  const [intervalId, setIntervalId] = useState(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleMouseOver = (event) => {
    let iteration = 0;
    const targetText = event.target.dataset.value;  // The original text passed as a prop

    // Clear any previous interval to avoid overlap
    if (intervalId) clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setText((prevText) =>
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];  // Keep the original text for already revealed letters
            }
            return letters[Math.floor(Math.random() * 26)];  // Random letters
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(newIntervalId);  // Stop the animation once all letters are revealed
      }

      iteration += 1 / 3;  // Incrementally reveal letters
    }, 30);

    setIntervalId(newIntervalId);  // Store the interval ID so we can clear it later
  };

  const handleMouseOut = () => {
    setText(children);  // Reset text to the original content when mouse leaves
  };

  return (
    <h1
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      data-value={children}
    >
      {text || children}
    </h1>
  );
};

export default AnimatedText;
