import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';

import logo from './logo.svg';
import './Main.scss';
import { incrementCount, decrementCount } from '../../actions';
import { Store } from '../../store/store';

const Main = () => {
  const { state, dispatch } = React.useContext(Store);
  const [localState, setState] = React.useState({
    'source': 'src/components/body/Body.js'
  });

  React.useEffect(() => {
    console.log(`State: ${JSON.stringify(state)}`)
    console.log(`localState: ${JSON.stringify(localState)}`)
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

  const clickDecrement = (event) => {
    event.preventDefault();
    decrementCount(state.count, dispatch);
  };

  return (
    <div className="main">
      <img src={logo} className="main-logo" alt="logo" />
      <p>
        <Form.Label>Edit <code>{localState.source}</code> and save to reload.</Form.Label>
        <Form.Control
          type="text"
          id="inputSource"
          aria-describedby="source"
          onChange={changeSource}
          value={localState.source}
        />
        </p>
      <p>
        <Button onClick={clickIncrement} className='main-Button-green'>Increment</Button>
        <Button onClick={clickDecrement} className='main-Button-red'>Decrement</Button>
      </p>
    </div>
  );
};

export default Main;
