import React from 'react';
import './App.css';
import Allroutes from './routes/Allroutes';
import Nutriton from './pages/Nutrition';


function App() {
  return (
    <div className="App">
      
     {/* <h1 className='text-5xl'>Hello </h1> */}
     <Allroutes/>
     
     <Nutriton/>
     
      
     

    </div>
  );
}

export default App;
