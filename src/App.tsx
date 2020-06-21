import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Auth from './auth/Auth'
import Login from './auth/Login'
import Signup from './auth/Signup'



function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    {/* <Auth/> */}
    </div>
    </Router>
  );
}
export default App;
