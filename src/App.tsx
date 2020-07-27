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
import AdminHome from './Admin/AdminHome'
import Profile from './components/Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)
  const [adminView, setAdminView] = useState<boolean>(false)
    
  useEffect(() => {
    if (localStorage.getItem('token')){
      let temp = localStorage.getItem('token')
      if (temp) {setToken(temp); setIsAuthenticated(true)}
        else {setToken('')}}
  }, [])


    // session token can only stay here
    const protectedViews = (sessionToken: string, Boss: boolean) => {

      // const url = 'http://localhost:3002/redBadge/user/all'
      // fetch(url, {
      //     method: 'GET',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': token,
      //     }
      // })
      //     .then(data => data.json())
      //     // .then(data => console.log('hello', data))
      //     .then(data => data.admin === true ? setAdmin(true) : setAdmin(false))
  
      //     .catch(err => console.warn(err))
          
      setToken(sessionToken)
      localStorage.setItem("token",sessionToken)
      setIsAuthenticated(true)
      if(Boss){
        setAdmin(true)
      } 
    }

  // LOG OUT = cleartoken
  const clearToken = () => {
    localStorage.clear();
    setToken('')
    setIsAuthenticated(false)
  }

  // const adminProtectedViews = (sessionToken: string) => {
    
    
  //   setIsAuthenticated(true)
  //   console.log("lookn' cool bruhh")
  // // }

  // console.log(protectedViews('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTk1ODYxMTAyLCJleHAiOjE1OTU5NDc1MDJ9.h3CObpJn4f40EPLNAqOCoPosjPY6RM-UyXLT_khePrg'))

  // console.log(admin)
  if(isAuthenticated && admin === true){

  return (
    <div>
      <AdminHome />
    </div>
    );
  } else if(isAuthenticated){
    return (
    <div className="App">
    <Router>
        <NavBar token={token} admin={admin} adminView={adminView} setAdminView={setAdminView}/>
        <Switch>
          <Route path='/CreatePost' component={NewPost}>
            <NewPost token={token}/>
          </Route>
          <Route path='/Profile' component={Profile}>
           <Profile token={token} clearToken={clearToken}/>
          </Route>
          <Route path='/'>
            <Home token={token} component={Home} admin={admin}/>
          </Route>
        </Switch>
        </Router>
    </div>
    )
  } else {
    return <Auth protectedViews={protectedViews} />
  }
}
export default App

