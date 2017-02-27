import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from 'containers/main'

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ Main } />
      </Router>
    )
  }
}