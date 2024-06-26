import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { UserDetail } from './pages/UserDetail';
import UserProvider from './components/UserContext';

function App() {
  return (
    <div className="App">

      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
        
    </div>
  );
}

export default App;
