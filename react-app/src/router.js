import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// components
import Home from './components/Home/Home'
import About from './components/About/About'
import Error from './components/Error/Error'

import Header from './components/Header/Header'

const history = createBrowserHistory()

// we can pass the lang files as props to the routes
// we should have a nested route inside service here to show the other services page

class Routes extends Component {
  render () {
    return (
        <Router history={history}>
          <div className='off-canvas-wrap' data-offcanvas>
            <div className='inner-wrap'>
              <Header transparent />
              <Switch>
                <Route path='/about' component={About} />
                <Route path='/' component={Home} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </Router>
    )
  }
}

export default Routes
