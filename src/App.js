import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.scss";
import SideNav from './SideNav'
import ViewSlideToggle from './SlideToggle'
import ViewDatePicker from './DatePicker'

function App() {
  return (
      <Router>
        <SideNav>
        <Switch>
          <Route path="/slide-toggle">
            <ViewSlideToggle />
          </Route>
          <Route path="/date-picker">
            <ViewDatePicker />
          </Route>
        </Switch>
        </SideNav>
      </Router>
  );
}

export default App;
