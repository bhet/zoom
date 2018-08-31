import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './views/home';
import Login from './views/login';
import Dash from './views/dash';
import Signup from './views/create';
import Entryform from './components/entryForm';
import TopNav from './views/TopNav';
import Nav from './components/Nav';

class App extends Component {
  render() {
    console.log("Props in App", this.props)
    return (
      <div className="App">
        <Router>

          <div>
            <TopNav />

            <Route exact path ="/" component={Home}/>
            <Route  path ="/login" component={Login}/>
            <Route  path ="/dash" component={Dash}/>
            <Route path="/addform" component={Entryform}></Route>
            <Route  path ="/signup" component={Login}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
