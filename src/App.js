import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Counter from './components/Counter';
import Count from './components/Count';
import Multiple from './components/Multiple';
import Effect from './components/Effect';
import Timer from './components/Timer';
import { useState } from 'react';

function App() {

  const [showComponent, setShowComponent] = useState(true);
  const [timer, setTimer] = useState(true);

  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>Hide</button>
      {showComponent && <Effect />}

      <button onClick={() => setTimer(!timer)}>
        {timer ? 'Stop Timer' : 'Start Timer'}
      </button>
      
      {timer &&       <Timer />      }
      
    </>
  );
}

export default App;