import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setCount(0);

  return (
    <section className="card">
      <h2>Counter</h2>
      <p className="display">{count}</p>
      {count === 0 && <p className="hint">Minimum limit reached</p>}
      <div className="button-row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;
