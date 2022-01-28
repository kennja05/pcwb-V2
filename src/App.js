import './App.css';

import {ThemeProvider} from 'styled-components';
import {siteTheme} from './partials/theme'

import Nav from './partials/nav.tsx';
import Footer from './partials/footer.tsx';
import Director from './pages/director.tsx';
import ContactForm from './pages/contactForm.tsx';
import Events from './pages/events.tsx';
import Media from './pages/media.tsx';
import Members from './pages/members.tsx';
import Homepage from './pages/homepage.tsx';

import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

 
function App() {

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={siteTheme}>
        <Nav></Nav>
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
          <Route exact path='/contact'>
            <ContactForm />
          </Route>
          <Route exact path='/'>
            <Homepage />
          </Route>
        </Switch>
        <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;