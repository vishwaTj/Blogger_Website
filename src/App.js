import './App.css';
import Home from './Pages/Home';
import Navabar from './components/Navabar';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navabar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
