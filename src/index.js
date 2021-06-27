import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Panel from "./components/Panel";
import { StoreProvider } from "./context";
import stores from "./stores/stores";

const App = () => {
  useEffect(() => {});

  return (
    <StoreProvider value={stores}>
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
        <Panel />
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
    </StoreProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
