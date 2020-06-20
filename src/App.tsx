import React from 'react';
import NavBar from './home/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    </div>
    </Router>
  );
}
}

export default App;
