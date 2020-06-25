import React, {useState} from 'react';
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


  //SET IS AUTHENTICATED IS SET TO TRUE SO I CAN
  //EDIT HOME PAGE
const [isAuthenticated, setIsAuthenticated] = useState(true)
const [token, setToken] = useState('')


const protectedViews = (sessionToken: string) => {
  console.log(sessionToken)
  setIsAuthenticated(true)
  setToken(sessionToken)
}



  if(isAuthenticated){

  return (
    <div className="App">
    <Router>
        <NavBar/>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
  } else {
    return <Auth protectedViews={protectedViews}/>
  }
}
export default App;
