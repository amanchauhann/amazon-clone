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
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [{ basket }, dispatch] = useStateValue();


  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("The user is ", authUser);

      if(authUser){
        // usr is logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out.
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  
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
