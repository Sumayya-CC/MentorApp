import React from 'react';
import {Router, Route, browserHistory, Redirect} from "react-router";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router 
    history={browserHistory}>
    <Redirect from="/" to="/Login" />
    <Route> 
<Route exact path="/" component={Login}/>
<Route exact path="/Login" component={Login} />
<Route exact path="/Home" component={Home} />
</Route>
</Router>
  
      
   
  );
}

export default App;
