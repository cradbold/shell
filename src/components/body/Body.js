import logo from './logo.svg';
import React from 'react';
import './Body.css';
import { incrementCount } from '../../actions';
import { Store } from '../../store/store';

const Body = () => {
  const { state, dispatch } = React.useContext(Store);
  const [localState, setState] = React.useState({
    'source': 'src/components/body/Body.js'
  });

  console.log(`Context: ${JSON.stringify(state)}`)
  console.log(`Context: ${JSON.stringify(localState)}`)

  const changeSource = (event) => {
    setState({
      ...localState,
      'source': event.target.value
    });
    console.log(`State: ${JSON.stringify(state)}`)
    console.log(`Context: ${JSON.stringify(localState)}`)
  };

  const clickIncrement = (event) => {
    event.preventDefault();
    incrementCount(state.count, dispatch);
    console.log(`State: ${JSON.stringify(state)}`)
    console.log(`Context: ${JSON.stringify(localState)}`)
  };

  return (
    <div className="Body">
      <img src={logo} className="Body-logo" alt="logo" />
      <p>
        Edit <code>{localState.source}</code> and save to reload.
      </p>
      <a className="Body-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <p>
        <input value={localState.source} onChange={changeSource} />
      </p>
      <p>
        <button onClick={clickIncrement}>
          Increment
        </button>
      </p>
    </div>
  );
}

export default Body;
