import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeadState from './context/lead/LeadState'
import AuthState from './context/auth/AuthState'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import ContactUs from './components/pages/ContactUs'
import Navbar from './components/layout/Navbar'
import './App.css';
 console.log(Route.path)
function App() {
  return (

    <Router>
    <Fragment>
      <Navbar />
      
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Services' component={Services} />
          <Route exact path='/ContactUs' component={ContactUs}/>
        </Switch>
      </div>
    </Fragment>
    </Router>
 );
}


export default App;
