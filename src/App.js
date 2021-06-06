import './App.css';
import Director from './pages/director.js';
import Events from './pages/events.js';
import Media from './pages/media.js';
import Members from './pages/members.js';
import Homepage from './pages/homepage.js';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/director'>
            <Director />
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
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
