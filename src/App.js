
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import SignIn from './SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  {Component} from 'react';

function App() {
  return (
    <Router>

    <div className="App">
    <Header />
    <Routes>
     <Route path="/login" element= {<SignIn />} /> 
      <Route path="/checkout" element={<Checkout />} >
      
        </Route>
        

      <Route path="/" element={<Home /> } >
      
      </Route>
      
      
      
       


    </Routes>

      
      
    </div>
    </Router>
  );
}

export default App;
