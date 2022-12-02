import { useContext, useReducer } from 'react';
import {
  IndexContext,
  indexInitialState,
  indexReducer,
} from './reducers/indexReducer';
import './App.css';

const TextComponent = () => {
  const [state, dispatch] = useContext(IndexContext);

  return (
    <>
      <h1>text : {state.text}</h1>
      <div className="btnContainer">
        <button onClick={() => dispatch({ type: 'changeToKor' })}>한글</button>
        <button onClick={() => dispatch({ type: 'changeToEng' })}>
          English
        </button>
      </div>
    </>
  );
};

const CountComponent = () => {
  const [state, dispatch] = useContext(IndexContext);

  return (
    <>
      <h1>Count : {state.count}</h1>
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
      <TextComponent />
      <CountComponent />
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
