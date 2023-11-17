import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Homepage/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Portofolio/' element = {<Home />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
