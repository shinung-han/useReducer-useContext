import { useReducer, useState } from 'react';
import './App.css';
import { indexInitialState, indexReducer } from './reducers/indexReducer';

function App() {
  const [state, dispatch] = useReducer(indexReducer, indexInitialState);

  return (
    <div className="app">
      <div>{state.text}</div>
      <div className="btnContainer">
        <button onClick={() => dispatch({ type: 'changeToKor' })}>한글</button>
        <button onClick={() => dispatch({ type: 'changeToEng' })}>
          English
        </button>
      </div>
      <div>{state.count}</div>
      <div className="btnContainer">
        <button onClick={() => dispatch({ type: 'decreaseCount' })}>-</button>
        <button onClick={() => dispatch({ type: 'increaseCount' })}>+</button>
      </div>
    </div>
  );
}

export default App;
