import React, {useState, useEffect} from 'react';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')


  // const protectedViews = (sessionToken: string) => {
  //   console.log(sessionToken)

  //   setToken(sessionToken)
  //   setIsAuthenticated(true)
  //   localStorage.setItem('token', sessionToken)
  // }

// updates token var if chrome saved a token in localStorage
useEffect(() => {
  if (localStorage.getItem('token')){
    let temp = localStorage.getItem('token')
    if (temp) {setToken(temp); setIsAuthenticated(true)}
      else {setToken('')}}
}, [])

// session token can only stay here
const protectedViews = (sessionToken: string) => {
  setToken(sessionToken)
  localStorage.setItem("token",sessionToken)
  setIsAuthenticated(true)
  console.log("lookn' cool bruhh")
}

// LOG OUT = cleartoken
const clearToken = () => {
  localStorage.clear();
  setToken('')
  setIsAuthenticated(false)
  console.log("duces")
}

  if (isAuthenticated) {

  if(isAuthenticated){

  return (
    <div className="App">
    <Router>
        <NavBar clearToken={clearToken}/>
        <Switch>
          <Route path="/">
            <Home token={token}/>
          </Route>
          {/* <Route path="/CreatePost">
            <NewPost token={token}/>
          </Route>
          <Route path="/NewPost">
            <NewPost/>
          </Route> */}
        </Switch>
      </Router>
    </div>
    );
  } else {
    return <Auth protectedViews={protectedViews} />
  }
}}
export default App
