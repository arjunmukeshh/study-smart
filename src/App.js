import React from 'react';
import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      
      <CountdownTimer countdownTimestampMs={1500000}/>
    </div>
  );
}

export default App;