import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {testClick} from './testSlice';
import Button from '@material-ui/core/Button';

function App() {
  interface State {
    testingSomething: {
         value: number
    }
  }
  const testState = useSelector( (state:State) => state)
  const dispatch = useDispatch();
  const handleClick = () => {
      dispatch(testClick());
    console.log(testState);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
                className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <button onClick={handleClick}>Test</button>
      </header>
    </div>
  );
}

export default App;
