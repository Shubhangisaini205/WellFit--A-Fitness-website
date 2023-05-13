
import './App.css'
import React from 'react';
import './App.css';
import Allroutes from './routes/Allroutes';


import Nutriton from './pages/Nutrition';
import Workout from './pages/Exercise';
import Plan from './pages/Plan';
import ExerciseInputForm from './pages/ExerciseInputForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Allroutes/>
    </div>
  );
}

export default App;
