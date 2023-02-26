import { useState } from 'react';
import './App.css';
import DynamicObj from './components/dynamicObj';
import Timer from './components/timer';


function App() {
  const [showTimer, setShowTimer] = useState(true)
  return (
    <div className="App">
      <DynamicObj />
      { showTimer? <Timer /> : <></>}
      <button onClick={() => setShowTimer(!showTimer)}>showTimer</button>
    </div>
  );
}

export default App;
