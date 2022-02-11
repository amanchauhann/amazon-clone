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
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51KRZmjERpJEKFiD6464RskqC1C6tnsQ7ZN4VJgkayOjucDuZxnfvLyhNBb31GCzIXR3shNT68a7nC20NoNP3VyOQ00NB5wYZfr');

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
        <Route path="/orders" element={[<Header />,<Orders />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />

          <Route path="/payment" element={[
          <Header />,
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          ]} />

          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
