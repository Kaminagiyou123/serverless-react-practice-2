import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router,Route} from'react-router-dom'
import {Singleproduct} from './Singleproduct'
ReactDOM.render(
  <React.StrictMode>
    <Router>
   <Route path='/' exact><App />  </Route> 
   <Route path='/:productID'><Singleproduct/></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
