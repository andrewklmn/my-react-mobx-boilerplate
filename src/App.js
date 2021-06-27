import React, { useEffect } from "react";
import {Provider} from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import stores from "./stores/stores";
import { AppDataProvider } from './context';

import Panel from "./components/Panel";
import Footer from "./components/Footer";

import './App.css';

const App = () => {
  useEffect(() => {
    console.log('=== APP RENDER DONE ===');
    console.log(stores);
  });

  return (
    <Provider {...stores}>
      <AppDataProvider value={'This message was received from context.'}>
        <Router>
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
          <hr />
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
          <hr />
          <Panel />
          <br />
          <Footer />
        </Router>
      </AppDataProvider>
    </Provider>
  );
};

export default App;
