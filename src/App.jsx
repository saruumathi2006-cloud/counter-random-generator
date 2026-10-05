import Counter from './components/Counter';
import RandomNumber from './components/RandomNumber';
import './App.css';

function App() {
  return (
    <main className="app">
      <h1>Counter &amp; Random Number Generator</h1>
      <div className="sections">
        <Counter />
        <RandomNumber />
      </div>
    </main>
  );
}

export default App;
