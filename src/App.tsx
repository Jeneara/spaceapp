import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/home'
import Launches from './components/launches'

import './App.css'

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/launches'>Launches</Link>
              </li>
            </ul>
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
