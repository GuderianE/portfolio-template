import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Page404 from "./Page404";
import '../App.css';

export default function App() {

  return (
    <Router>
      <div className="main">
        
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route component={Home} exact path="/"/>
          <Route component={Projects} path="/Projects" />
          <Route component={Contact} path="/Contact" />
          <Route component={Page404} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}