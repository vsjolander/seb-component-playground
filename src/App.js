import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import "./App.scss";
import SideNav from './SideNav'
import ViewSlideToggle from './SlideToggle'
import ViewDatePicker from './components/DatePicker'

function App() {
  return (
    <ThemeProvider theme={theme}>
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
      </ThemeProvider> 
  );
}

export default App;
