import React from 'react';
import NavBar from './home/Navbar'
import Auth from "./auth/Auth"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <div className="App">
    <Router>
        <NavBar/>
        <Switch>
          <Route path='/auth'>
            <Auth/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
    </Router>
  );
}
export default App;
