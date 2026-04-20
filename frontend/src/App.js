import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import Landing from './pages/Landing';

// page and components import '

function App() {
  const{user}=useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/home' element={user ? <Home/> : <Navigate to="/login" />} />

<Route path='/signup' element={!user ? <Signup/> : <Navigate to="/home" />} />

<Route path='/login' element={!user ? <Login/> : <Navigate to="/home" />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
