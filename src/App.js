import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';


const App = () => {
  return (
    <>
      <Router >
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
