import { useState } from 'react';

function RandomNumber() {
  const [number, setNumber] = useState(null);

  const generate = () => {
    const value = Math.floor(Math.random() * 100) + 1;
    setNumber(value);
  };

  return (
    <section className="card">
      <h2>Random Number Generator</h2>
      <p className="display">
        {number === null ? 'No number generated yet' : number}
      </p>
      <div className="button-row">
        <button onClick={generate}>Generate Random Number</button>
      </div>
    </section>
  );
}

export default RandomNumber;
