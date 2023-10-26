import logo from './logo.svg';
import React from 'react';
import './Body.css';
import { incrementCount } from '../../actions';
import { Store } from '../../store/store';
import Button from 'react-bootstrap/Button';

const Body = () => {
  const { state, dispatch } = React.useContext(Store);
  const [localState, setState] = React.useState({
    'source': 'src/components/body/Body.js'
  });

  React.useEffect(() => {
    console.log(`State: ${JSON.stringify(state)}`)
    console.log(`Context: ${JSON.stringify(localState)}`)
  });

  const changeSource = (event) => {
    setState({
      ...localState,
      'source': event.target.value
    });
  };

  const clickIncrement = (event) => {
    event.preventDefault();
    incrementCount(state.count, dispatch);
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
        <Button onClick={clickIncrement}>
          Increment
        </Button>
      </p>
    </div>
  );
}

export default Body;
