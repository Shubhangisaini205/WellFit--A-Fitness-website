
import './App.css'
import React from 'react';
import './App.css';
import UserPage from './pages/UserPage';
import Home from './pages/Home';
import Allroutes from './routes/Allroutes';


import Nutriton from './pages/Nutrition';
import Addworkout from './components/Addworkout';
import Yoga from './components/Yoga';

function App() {
  return (
    <div className="App">
     
     {/* <Nutriton/> */}
{/* <UserPage/> */}
<Addworkout/>
{/* <Yoga/> */}
    </div>
  );
}

export default App;
