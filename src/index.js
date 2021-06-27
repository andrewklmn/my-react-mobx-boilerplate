import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {Provider} from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import stores from "./stores/stores";
import Panel from "./components/Panel";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    console.log('=== APP RENDER DONE ===');
    console.log(stores);
  });

  return (
    <Provider {...stores}>
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
        <Footer />
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
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
