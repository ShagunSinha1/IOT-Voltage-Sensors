import './App.css';
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
