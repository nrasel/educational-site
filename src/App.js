import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Admission from './components/Admission/Admission';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/admission">
            <Admission />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
