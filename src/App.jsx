import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const hello = "Hello World"
  function handleClick() {
    alert('Hello')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hello}
        </p>
        <Button variant='primary' onClick={handleClick}>Hello button</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
