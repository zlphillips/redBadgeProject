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
import NewPost from './components/CreatePost';



function App() {


  //SET IS AUTHENTICATED IS SET TO TRUE SO I CAN
  //EDIT HOME PAGE
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [token, setToken] = useState('')


// session token can only stay here
const protectedViews = (sessionToken: string) => {
  setToken(sessionToken)
  localStorage.setItem("token",sessionToken)
  setIsAuthenticated(true)
  console.log("lookn' cool bruhh")
}



  if(isAuthenticated){

  return (
    <div className="App">
    <Router>
        <NavBar/>
        <Switch>
          <Route path="/">
            <Home token={token}/>
          </Route>
          <Route path="/NewPost">
            <NewPost/>
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
