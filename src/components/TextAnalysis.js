import React, { useState, useEffect } from 'react';
import './TextAnalysis.css';

const TextAnalysis = () => {
  const [text, setText] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  useEffect(() => {
    // Unique word count (case-insensitive)
    const words = text.match(/\b\w+\b/g); // Match words (letters and numbers)
    if (words) {
      const uniqueWords = new Set(words.map(word => word.toLowerCase())); // Normalize to lowercase
      setUniqueWordCount(uniqueWords.size);
    } else {
      setUniqueWordCount(0);
    }

    // Character count excluding spaces and punctuation
    const characters = text.replace(/[^a-zA-Z0-9]/g, ''); // Keep only letters and numbers
    setCharCount(characters.length);
  }, [text]);

  const handleReplace = () => {
    const regex = new RegExp(searchString, 'g'); // Create a regex for the search string
    setText(prevText => prevText.replace(regex, replaceString)); // Replace all occurrences
  };

  return (
    <div className="text-analysis">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />
      <div className="stats">
        <p>Unique Word Count: {uniqueWordCount}</p>
        <p>Character Count (excluding spaces & punctuation): {charCount}</p>
      </div>
      <div className="replace-section">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search for..."
        />
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="Replace with..."
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
};

export default TextAnalysis;
