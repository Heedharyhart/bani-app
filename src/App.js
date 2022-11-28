import "./App.css";
import Dashboard from "./pages/Dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
