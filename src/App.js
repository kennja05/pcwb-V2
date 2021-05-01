import './App.css';
import Director from './pages/director.js';
import Events from './pages/events.js';
import Media from './pages/media.js';
import Members from './pages/members.js';
import Homepage from './pages/homepage.js';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/director'>
            <Director />
          </Route>
          <Route path='/events'>
            <Events />
          </Route>
          <Route path='/media'>
            <Media />
          </Route>
          <Route path='/members'>
            <Members />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
