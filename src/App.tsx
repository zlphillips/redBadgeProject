import React, {useState} from 'react';
import NavBar from './home/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Auth from './auth/Auth'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

const [isAuthenticated, setIsAuthenticated] = useState('')



  if(isAuthenticated){

  return (
    <Router>
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
    </Router>
  );
  } else {
    return <Auth/>
  }
}
export default App;
