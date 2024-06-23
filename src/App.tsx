import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />*/}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
