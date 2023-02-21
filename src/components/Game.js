import React, { useState, useEffect } from 'react';

const Game = () => {
  const [quote, setQuote] = useState('The quick brown fox jumps over the lazy dog.');
  const [text, setText] = useState('');
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [matched, setMatched] = useState(false);

  useEffect(() => {
    if (isTimerRunning && timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else if (isTimerRunning && timer === 0) {
      setIsTimerRunning(false);
      setMatched(text === quote);
    }
  }, [isTimerRunning, timer, text, quote]);

  const handleTextChange = (event) => {
    setText(event.target.value);
    if (event.target.value === quote) {
      setIsTimerRunning(false);
      setMatched(true);
    }
  };

  const handleTimerChange = (event) => {
    setTimer(parseInt(event.target.value));
  };

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  return (
    <div className="App">
      <h1>Type the Quote</h1>
      <p>{quote}</p>
      <textarea value={text} onChange={handleTextChange} disabled={!isTimerRunning} />
      <div className="timer-container">
        <label>Timer (seconds):</label>
        <select value={timer} onChange={handleTimerChange}>
          <option value="60">60</option>
          <option value="120">120</option>
        </select>
        <button onClick={handleStartTimer} disabled={isTimerRunning}>
          Start Timer
        </button>
      </div>
      {matched && <p className="matched">Typed Correct!</p>}
      {isTimerRunning && <p className="timer">{timer}</p>}
    </div>
  );
};

export default Game;
