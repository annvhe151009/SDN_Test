import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Slider from './components/Slider';
import ListCard from './components/ListCard';
import Promotion from './components/Promotion';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/category' element={<Slider />} />
          <Route exact path='/listcard' element={<ListCard />} />
          <Route exact path='/promotion' element={<Promotion />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/about' element={<AboutMe />} />
          <Route exact path='/contact' element={<ContactMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
