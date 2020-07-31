import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store'

import Amplify from 'aws-amplify'
import '@aws-amplify/ui/dist/style.css'
import config from './aws-exports'

import * as serviceWorker from './serviceWorker'

Amplify.configure(config)

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
