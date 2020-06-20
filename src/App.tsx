import React from 'react';
import NavBar from './home/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
