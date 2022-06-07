import * as React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Pages/home';
import Launches from './components/Pages/launches';



const GlobalStyle = createGlobalStyle`
  body{
    background: #fff;
    min-height: 100vh;
    margin: 0;
    color: #000;
    font-family: 'Kaushan Script';
  }
`;


function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path='/Launches' component={Launches} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    </>
  );
};

export default App;
