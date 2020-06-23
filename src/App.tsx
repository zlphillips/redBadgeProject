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

const [isAuthenticated, setIsAuthenticated] = useState(false)
const [token, setToken] = useState('')


const ProtectedViews = (sessionToken: string) => {
  setIsAuthenticated(true)
  
  setToken(sessionToken)
  console.log(sessionToken)
}



  if(isAuthenticated){

  return (
    <Router>
    <div className="App">
    <Router>
        <NavBar />
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
  } else {
    return <Auth protectedViews={ProtectedViews}/>
  }
}
export default App;
