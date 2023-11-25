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
          <Route path='/portofolio/' element = {<Home />}/>
          <Route path = '/portofolio/Experience/' element = {<Experience/>}/>
          <Route path = '/portofolio/Profile/' element = {<Profile/>}/>
          <Route path = '/portofolio/ContactMe/' element = {<ContactMe/>}/>
        </Routes>
      </Router>
      </NavbarContextProvider>
      
    </div>
  );
}

export default App;
