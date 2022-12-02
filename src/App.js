import { useContext, useReducer } from 'react';
import {
  IndexContext,
  indexInitialState,
  indexReducer,
} from './reducers/indexReducer';
import './App.css';

const TextButton = () => {
  const [state, dispatch] = useContext(IndexContext);

  return (
    <>
      <div>{state.text}</div>
      <div className="btnContainer">
        <button onClick={() => dispatch({ type: 'changeToKor' })}>한글</button>
        <button onClick={() => dispatch({ type: 'changeToEng' })}>
          English
        </button>
      </div>
    </>
  );
};

const CountButton = () => {
  const [state, dispatch] = useContext(IndexContext);

  return (
    <>
      <div>{state.count}</div>
      <div className="btnContainer">
        <button onClick={() => dispatch({ type: 'decreaseCount' })}>-</button>
        <button onClick={() => dispatch({ type: 'increaseCount' })}>+</button>
      </div>
    </>
  );
};

function Container() {
  return (
    <div className="app">
      <TextButton />
      <CountButton />
    </div>
  );
}

function App() {
  return (
    <IndexContext.Provider value={useReducer(indexReducer, indexInitialState)}>
      <Container />
    </IndexContext.Provider>
  );
}

export default App;
