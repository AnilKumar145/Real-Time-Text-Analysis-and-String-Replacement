import React from 'react';
import TextAnalysis from './components/TextAnalysis';
import './App.css'; // Ensure you import your CSS file

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <h1>Real-Time Text Analysis and String Replacement</h1>
      </div>
      <TextAnalysis />
    </div>
  );
}

export default App;
