import logo from './logo.svg';
import React from 'react';
import './Body.css';
import { incrementCount } from '../../actions';
import { Store } from '../../store/store';

const Body = () => {
  const { state, dispatch } = React.useContext(Store);

  // const [_, setState] = React.useState({
  //   ...state,
  //   'source': 'src/components/body/Body.js'
  // });

  const changeSource = (event) => {
    // setState({
    //   ...state,
    //   'source': event.target.value
    // });
    console.log(state)
  };

  const clickIncrement = (event) => {
    event.preventDefault();
    incrementCount(state.count, dispatch);
    // setState({
    //   ...state,
    //   'count': state.count++
    // });
    console.log(state)
  };

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
      <p>
        <button onClick={clickIncrement}>
          Increment
        </button>
      </p>
    </div>
  );
}

export default Body;
