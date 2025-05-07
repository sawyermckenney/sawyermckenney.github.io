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
      const response = await axios.post("http://localhost:5001/run-script");
      setOutput(response.data.output);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const runProManageScript = () => {
    window.open("https://www.google.com", "_blank");
  }
  return (
    <div className="Portfolio">
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
      <div className="Promanager-Project">
        <h1>ProManage</h1>
        <h2>
          ProManage is a project I developed to assist managers and employees in tracking their projects and tasks. It
          features a user-friendly interface that allows users to create, assign, and monitor tasks efficiently. The
          application includes functionalities for setting deadlines, tracking progress. This project showcases my ability to
          design and implement a full-stack application, integrating both front-end and back-end technologies.
        </h2>
        <button onClick={runProManageScript}>
          View ProManage
        </button>
        </div>
    </div>
  );
};

export default Portfolio;