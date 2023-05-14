
import './App.css'
import React from 'react';
import './App.css';
import Allroutes from './routes/Allroutes';
import Nutriton from './pages/Nutrition';
import Workout from './pages/Exercise';
import Plan from './pages/Plan';
import ExerciseInputForm from './pages/ExerciseInputForm';
import Navbar from './components/Navbar';
import Yoga from './components/Yoga';
import Addworkout from './components/Addworkout';
import UserPage from './pages/UserPage';
import { Chatbot } from './components/Chatbot';


function App() {
  return (
    <div className="App">

   
  <Nutriton/>
    

    <Navbar/>


    </div>
  );
}

export default App;
