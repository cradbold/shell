import logo from './logo.svg';
import React from "react";
import './Body.css';
import { addTodo } from '../../actions';
import { Store } from '../../store/store';

const Body = () => {
  const [state, setState] = React.useState({
    'source': 'src/components/body/Body.js'
  });

  const { dispatch } = React.useContext(Store);

  const changeSource = (event) => {
    setState({
      ...state,
      'source': event.target.value,
      'todo': 0
    });
  };

  const clickTodo = (event) => {
    event.preventDefault();
    addTodo(state.todo, dispatch);
    setState({
      ...state,
      'todo': ''
    });
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
        <button onClick={clickTodo}>
          To Do
        </button>
      </p>
    </div>
  );
}

export default Body;
