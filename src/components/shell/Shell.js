import logo from './logo.svg';
import './Shell.css';

function Shell() {
  return (
    <div className="Shell">
      <header className="Shell-header">
        <img src={logo} className="Shell-logo" alt="logo" />
        <p>
          Edit <code>src/Shell.js</code> and save to reload.
        </p>
        <a
          className="Shell-link"
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

export default Shell;
