import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          deploy-on-vercel-on-github
        </p>
        <a
          className="App-link"
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning deploy on vercel
        </a>
      </header>
    </div>
  );
}

export default App;
