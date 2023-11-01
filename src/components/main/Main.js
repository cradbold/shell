import logo from './logo.svg';
import React from 'react';
import './Main.scss';
import { incrementCount } from '../../actions';
import { Store } from '../../store/store';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Button onClick={clickIncrement}>Increment</Button>
      </p>
    </div>
  );
};

export default Main;
