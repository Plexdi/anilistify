import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Signup' element={<Signup />}/>
      <Route path='/Login' element={<Login />}/>
    </Routes>
  );
}

export default App;
