
import './App.css'
import React from 'react';
import './App.css';
import Allroutes from './routes/Allroutes';
import Nutriton from './pages/Nutrition';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Workout from './pages/Workout';
import ExerciseUI from './pages/ExerciseUI';

function App() {
  return (
    <div className="App">
    
     {/* <Allroutes/> */}
  {/* <ExerciseUI/> */}
  <Nutriton/>
    
    </div>
  );
}

export default App;
