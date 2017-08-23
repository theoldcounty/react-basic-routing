import React, { Component } from 'react'
import { render } from 'react-dom'

import './index.css'

import Routes from './router'

// this is a class because it needs state
class App extends Component {
  componentDidMount() {    

  }

  render() {
    return (
      <Routes />
    )
  }
}

render(
    <App />,
    document.getElementById('root')
);