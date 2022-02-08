// import { Home } from '@mui/icons-material';
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    // BEM
    <BrowserRouter>
      <div className="app">
      
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
