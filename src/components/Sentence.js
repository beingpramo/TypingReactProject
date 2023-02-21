import React from 'react';

const Sentence = ({ sentence, onTyping, onStart, started }) => {
  return (
    <div>
      <p>{sentence}</p>
      {!started && <button onClick={onStart}>Start</button>}
      <input type="text" onInput={onTyping} disabled={!started} />
    </div>
  );
};

export default Sentence;
