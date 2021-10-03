import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/about">

          </Route>
          <Route exact path="/users">

          </Route>
          <Route exact path="/">

          </Route>
          <Route exact path="*">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
