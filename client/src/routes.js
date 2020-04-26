import React, { useContext, useEffect } from 'react';
import {  Router, Route, Switch, Redirect } from 'react-router';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Context from './utils/context'
import { createBrowserHistory } from 'history'


const Routes = () => {

  const context = useContext(Context)

  return(
    <div>
        <Router history={createBrowserHistory()} >
        <Navbar />
        <Switch>
          <Route path="/" component={Home}  />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes

