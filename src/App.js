import { useState } from 'react';
import './App.css';
import DynamicObj from './components/dynamicObj';
import Timer from './components/timer';


function App() {
  const [showTimer, setShowTimer] = useState(true)
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
