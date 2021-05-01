import './App.css';
import Director from './pages/director.js'
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
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
