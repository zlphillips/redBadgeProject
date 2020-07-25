import React, {useState, useEffect} from 'react';
import NavBar from './home/Navbar'
import Auth from "./auth/Auth"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewPost from './components/CreatePost'
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

    
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

  const adminProtectedViews = (sessionToken: string) => {
    setToken(sessionToken)
    localStorage.setItem("token",sessionToken)
    setIsAdmin(true)
    console.log("lookn' cool bruhh")
  }



  if(isAuthenticated){

  return (
    <div className="App">
    <Router>
        <NavBar token={token}/>
        <Switch>
          <Route path='/CreatePost' component={NewPost}>
            <NewPost token={token}/>
          </Route>
          <Route path='/Profile' component={Profile}>
           <Profile token={token} clearToken={clearToken}/>
          </Route>
          <Route path='/'>
            <Home token={token} component={Home}/>
          </Route>
        </Switch>
        </Router>
    </div>
    );
  } else {
    return <Auth protectedViews={protectedViews} />
  }
}
export default App
