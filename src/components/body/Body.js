import logo from './logo.svg';
import './Body.css';

const Body = () => {
  return (
    <div className="Body">
      <img src={logo} className="Body-logo" alt="logo" />
      <p>
        Edit <code>src/components/body/Body.js</code> and save to reload.
      </p>
      <a className="Body-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default Body;
