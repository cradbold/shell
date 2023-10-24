import logo from './logo.svg';
import React from "react";
import './Body.css';

const Body = () => {
  const [source, setSource] = React.useState('src/components/body/Body.js');

  return (
    <div className="Body">
      <img src={logo} className="Body-logo" alt="logo" />
      <p>
        Edit <code>{source}</code> and save to reload.
      </p>
      <a className="Body-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <p>
        <input value={source} onChange={(e) => setSource(e.target.value)} />
      </p>
    </div>
  );
}

export default Body;
