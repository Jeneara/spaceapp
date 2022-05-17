import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LaunchList from './components/LaunchList/Index'
import LaunchProfile from './components/LaunchProfile'

import './App.css'

const App = () => {
  const [id, setId] = React.useState(42)
  const handleIdChange = React.useCallback((newId: React.SetStateAction<number>) => {
    setId(newId)
  }, [])

  return (
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
          <Route path='/launches'>
            <div className='App'>
              <LaunchList handleIdChange={handleIdChange} />
              <LaunchProfile id={id} />
            </div>
          </Route>
          <Route path='/'>
            <h1>SpaceApp</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
