import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Panel from "./components/Panel";
import timerStore from "./stores/timerStore";

const stores = {
  timerStore,
};

const App = () => {
  useEffect(() => {});

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="/dashboard">
          <div>Dashboard</div>
        </Route>
        <Redirect to="/" />
      </Switch>
      <Panel {...stores} />
      <br />
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
    </ul>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
