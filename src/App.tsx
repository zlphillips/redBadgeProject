import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Auth from './auth/Auth'
import Login from './auth/Login'
import Signup from './auth/Signup'


class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App">
      <nav>
        <Link className="navLink" to='/'>Home</Link>
        <br/>
        <Link className="navLink" to='/login'>Login</Link>
        <br/>
        <Link className="navLink" to='/signup'>Sign Up</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/Login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
