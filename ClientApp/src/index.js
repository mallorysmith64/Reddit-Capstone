import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
//imported ReactDOM
import ReactDOM from 'react-dom'
//changed BrowserRouter to as Router
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import history from './History'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

//changed BrowserRouter to router
ReactDOM.render(
  <Router basename={baseUrl}>
    <App />
  </Router>,
  rootElement
)

registerServiceWorker()
