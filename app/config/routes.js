import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ MainContainer } />
      </Router>
    )
  }
}