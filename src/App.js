import './App.css';

import {ThemeProvider} from 'styled-components';

import Nav from './nav.tsx';
import Director from './pages/director.tsx';
import Events from './pages/events.tsx';
import Media from './pages/media.tsx';
import Members from './pages/members.tsx';
import Homepage from './pages/homepage.tsx';

import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

const theme = {
    darkBlue: '#262c40',
    darkBlue2: '#192333',
    white: '#fbfbfb',
    offWhite: '#fbedda',
    orange: '#f37955',
    darkOrange: '#d55b37',
    black: '#040404',
    gray: '#777'
}

function App() {

  const colors = {
    darkBlue: '#262c40',
    darkBlue2: '#192333',
    white: '#fbfbfb',
    offWhite: '#fbedda',
    orange: '#f37955',
    darkOrange: '#d55b37',
    black: '#040404',
    gray: '#777'
  }

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
        <Nav></Nav>
        <Switch>
          <Route exact path='/director'>
            <Director {...colors}/>
          </Route>
          <Route exact path='/events'>
            <Events />
          </Route>
          <Route exact path='/media'>
            <Media />
          </Route>
          <Route exact path='/members'>
            <Members />
          </Route>
          <Route exact path='/'>
            <Homepage {...colors}/>
          </Route>
        </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;