import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import RetoolHome from "./pages/retoolHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/retool" element={<RetoolHome />} />
      </Routes>
    </Router>
  );
}

export default App;
