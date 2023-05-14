
import './App.css'
import './App.css';
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar';

import Yoga from './components/Yoga';
import Addworkout from './components/Addworkout';
import UserPage from './pages/UserPage';
import { Chatbot } from './components/Chatbot';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>



    <Allroutes/>
    <Footer/>


    </div>
  );
}

export default App;
