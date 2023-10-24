import logo from './logo.svg';
import React from "react";
import './Body.css';

const Body = () => {
  const [state, setState] = React.useState({
    'source': 'src/components/body/Body.js'
  });

  const changeSource = (e) => {
    setState({
      ...state,
      'source': e.target.value
    });
  }

  return (
    <div className="Body">
      <img src={logo} className="Body-logo" alt="logo" />
      <p>
        Edit <code>{state.source}</code> and save to reload.
      </p>
      <a className="Body-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <p>
        <input value={state.source} onChange={changeSource} />
      </p>
    </div>
  );
}

export default Body;
