import './App.css';
import Home from './Pages/Home';
import Navabar from './components/Navabar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Pages/login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <div>
        <Navabar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
