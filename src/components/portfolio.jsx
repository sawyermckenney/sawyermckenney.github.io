import React, { useState } from 'react';
import './portfolio.css';
import axios from 'axios';

const Portfolio = () => {
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const runMancalaScript = async () => {
    setLoading(true);
    setError('');
    try {
      // Replace with the actual endpoint of your Node.js or Flask backend
      const response = await axios.post("http://localhost:5001/run-script");
      setOutput(response.data.output);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Mancala-Project">
      <h1>Mancala Game</h1>
      <h2>
        This project was completed as part of my Introduction to Artificial Intelligence class (CSCI 2102) at the
        University of Colorado Boulder. It showcases the application of game theory principles. I implemented the
        Mancala game with alpha-beta pruning and the minimax algorithm to optimize decision-making. The project involved
        designing a robust game simulation, handling edge cases in gameplay, and applying theoretical AI concepts to
        improve computational efficiency. It provided hands-on experience with adversarial search algorithms and their
        practical applications in AI.
      </h2>
      <button onClick={runMancalaScript} disabled={loading}>
        {loading ? 'Running Script...' : 'Run Mancala Script'}
      </button>
      {output && (
        <div>
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Portfolio;