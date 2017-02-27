import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'store'
import Routes from 'config/routes'

ReactDOM.render((
    <Provider store={ store }>
      <Routes />
    </Provider>
  ), document.getElementById('app')
)