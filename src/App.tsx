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
import AdminUser from './/Admin/Home/Users'
import AdminView from './Admin/Home/Posts'



function App(props: any) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)
  const [adminView, setAdminView] = useState<boolean>(false)
    
  useEffect(() => {
    if (localStorage.getItem('token')){
      let temp = localStorage.getItem('token')
      if (temp) {setToken(temp); setIsAuthenticated(true)}
        else {setToken('')}
        let temp2 = localStorage.getItem('admin')
        if(temp2 === 'true') {setAdmin(true)}
      }
  }, [])


    // session token can only stay here
    const protectedViews = (sessionToken: string, Boss: boolean) => {

      setToken(sessionToken)
      localStorage.setItem("token",sessionToken)
      setIsAuthenticated(true)
      if(Boss){
        setAdmin(true)
        localStorage.setItem("admin", 'true')
      } 
    }

  // LOG OUT = cleartoken
  const clearToken = () => {
    localStorage.clear();
    setToken('')
    setIsAuthenticated(false)
    setAdmin(false)

  }

 if(isAuthenticated){
    return (
    <div className="App">
    <Router>
        <NavBar token={token} admin={admin}/>
        <Switch>
          <Route path='/CreatePost' component={NewPost}>
            <NewPost token={token}/>
          </Route>
          <Route path='/Profile' component={Profile}>
           <Profile token={token} clearToken={clearToken}/>
          </Route>
          <Route path='/AdminPosts' component={AdminView}>
            <AdminView />
          </Route>
          <Route path='/AdminUsers' component={AdminUser}>
            <AdminUser token={token} />
          </Route>
          <Route path='/'>
            <Home token={token} component={Home} admin={admin} />
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

