import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

import logo from './logo.svg';
import './Main.scss';
import { Store, actions as storeActions } from '../../store/store';

const Main = () => {
  const { state, dispatch } = React.useContext(Store);
  const [localState, setState] = React.useState({
    'source': 'src/components/body/Body.js'
  });
  const [spin, setSpin] = React.useState("5s");

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
    storeActions.incrementCount(dispatch, state);
  };

  const clickDecrement = (event) => {
    event.preventDefault();
    storeActions.decrementCount(dispatch, state);
  };

  return (
    <div className="main">
      <img src={logo} className="main-logo" alt="logo" style={{ animation: `main-logo-spin infinite ${spin} linear` }}/>
      {/* <Button onClick={clickIncrement} className='main-Button-faster'>Faster</Button>
      <Button onClick={clickDecrement} className='main-Button-slower'>Slower</Button> */}
      <InputLabel>Edit <code>{localState.source}</code> and save to reload.</InputLabel>
      <TextField margin="normal" required fullWidth id="textFieldSource" label="Source" value={localState.source} onChange={changeSource} autoFocus />        
      <Button onClick={clickIncrement} className='main-Button-green'>Increment</Button>
      <Button onClick={clickDecrement} className='main-Button-red'>Decrement</Button>
    </div>
  );
};

export default Main;
