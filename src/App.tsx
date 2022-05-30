import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Launches from './components/launches'
import { StyledLink } from './components/StyledLink'

import './App.css'

// import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/launches'>Launches</StyledLink>
          </nav>

          <Switch>
            <Route path='/launches' component={Launches} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
