# useReducer & useContext

### 참고 : [양반코딩](https://www.youtube.com/watch?v=hLm9J09wiOI)

## Preview

![useReducer useContext](https://user-images.githubusercontent.com/118904460/205240634-bc880171-e1d4-480e-89cc-10dd144dc354.gif)

## Code

### src/reducers/indexReducer.js
```javascript
import { createContext } from 'react';

export const IndexContext = createContext();

export const indexInitialState = {
  text: '기본값',
  count: 0,
};

export const indexReducer = (state, action) => {
  switch (action.type) {
    case 'changeToKor':
      return {
        ...state,
        text: '안녕하세요',
      };
    case 'changeToEng':
      return {
        ...state,
        text: 'Hello',
      };
    case 'increaseCount':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'decreaseCount':
      return {
        ...state,
        count: state.count <= 0 ? 0 : state.count - 1,
      };
    default: {
      return state;
    }
  }
};

```

### src/App.jsx
```javascript
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

```

### src/App.css
```css
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

.btnContainer {
  display: flex;
}

button {
  padding: 10px 20px;
  margin: 3px;
  border: 1px solid rgb(77, 131, 211);
  background-color: rgb(77, 131, 211);
  color: white;
  font-weight: bold;
  border-radius: 5px;
  outline: none;
}

```
