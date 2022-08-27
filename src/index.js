import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Product from './Product'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/**serveless-with-react-practice app version 4 - index js
 * file - Features:
 * 
 *      --> Implementing react-router v5 to route
 *          to 'Product' page    
 * 
 * Note: I place the routing here, because the App
 * contains 'Basic' and 'Airtable' js so i can redirect
 * from the main page to the 'Product' page 
 */

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/**the main route */}
      <Route path='/' exact>
        <App />
      </Route>
      {/**the product page, i set 'id' as the route */}
      <Route path='/:productID' >
        <Product />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
