import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Homepage/Home';
import { NavbarContextProvider } from './Context/Navbarcontext';
import Experience from './Pages/Experience/Experience';
import Profile from './Pages/Profile/Profile';
import ContactMe from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <NavbarContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Portofolio/' element = {<Home />}/>
          <Route path = '/Portofolio/Experience/' element = {<Experience/>}/>
          <Route path = '/Portofolio/Profile/' element = {<Profile/>}/>
          <Route path = '/Portofolio/ContactMe/' element = {<ContactMe/>}/>
        </Routes>
      </Router>
      </NavbarContextProvider>
      
    </div>
  );
}

export default App;
