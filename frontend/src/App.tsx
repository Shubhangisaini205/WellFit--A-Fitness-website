import React from 'react';
import './App.css';
import Allroutes from './routes/Allroutes';
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
