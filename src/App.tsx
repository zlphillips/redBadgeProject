import React, { useState } from 'react';
import NavBar from './home/Navbar'
import Auth from "./auth/Auth"
import NewPost from './components/CreatePost'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')


  const protectedViews = (sessionToken: string) => {
    console.log(sessionToken)

    setToken(sessionToken)
    setIsAuthenticated(true)
    localStorage.setItem('token', sessionToken)
  }



  if (isAuthenticated) {

    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/">
              <Home token={token} />
            </Route>
            <Route path="/CreatePost">
              <NewPost token={token} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } else {
    return <Auth protectedViews={protectedViews} />
  }
}
export default App;
